//código hecho por Angelithoxyz no quites créditos 
//
import similarity from 'string-similarity'

export async function before(m) {
  if (!m.text || !global.prefix.test(m.text)) return

  const usedPrefix = global.prefix.exec(m.text)[0]
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase()
  if (!command) return
  if (command === 'bot') return

  const validCommand = (command, plugins) => {
    for (let plugin of Object.values(plugins)) {
      let cmds = plugin.command
      if (!cmds) continue
      if (!Array.isArray(cmds)) cmds = [cmds]
      if (cmds.includes(command)) return true
    }
    return false
  }

  if (validCommand(command, global.plugins)) {
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]

    if (chat.isBanned) {
      const avisoDesactivado = `🚫 *${botname}* está desactivado en este grupo, nya~\n\n🛡️ Un *admin* puede activarlo con:\n➤ *${usedPrefix}bot on*`
      await m.reply(avisoDesactivado)
      return
    }

    if (!user.commands) user.commands = 0
    user.commands += 1

  } else {
    const comando = m.text.trim().split(' ')[0]
    const allCommands = []
    
    for (let plugin of Object.values(global.plugins)) {
      if (plugin.command) {
        let cmds = Array.isArray(plugin.command) ? plugin.command : [plugin.command]
        allCommands.push(...cmds.map(cmd => usedPrefix + cmd))
      }
    }

    // Buscar similares
    const matches = similarity.findBestMatch(comando, allCommands)
    const similares = matches.ratings
      .filter(match => match.rating >= 0.3)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)

    let respuesta = `❌ *Comando no encontrado*, nya~\n\n🔍 El comando *${comando}* no existe.\n`
    respuesta += `✨ Usa *${usedPrefix}help* para ver todos los comandos.\n`

    if (similares.length > 0) {
      respuesta += `\n📌 Quizás quisiste decir:\n`
      for (let sim of similares) {
        let porcentaje = (sim.rating * 100).toFixed(1)
        respuesta += `➤ ${sim.target} (${porcentaje}%)\n`
      }
    }

    await m.reply(respuesta)
  }
}