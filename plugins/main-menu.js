import moment from 'moment-timezone'

const tagsMap = {
  main: 'ℹ️ INFO',
  jadibot: '✨ SUB BOT',
  downloader: '🚀 DESCARGAS',
  game: '🎮 JUEGOS',
  gacha: '🌟 GACHA RPG',
  rg: '🟢 REGISTRO',
  group: '🛡 GRUPO',
  nable: '🎛️ ENABLE/DISABLE',
  nsfw: '🔞 +18 NSFW',
  buscadores: '🔍 BUSCADORES',
  sticker: '🎴 STICKERS',
  econ: '📦 ECONOMÍA',
  convertidor: '🎈 CONVERTIDORES',
  logo: '🎀 LOGOS',
  tools: '🧰 HERRAMIENTAS',
  randow: '🎲 RANDOM',
  efec: '🎤 EFECTOS AUDIO',
  owner: '👑 OWNER'
}

let handler = async (m, { conn }) => {
  const userId = m.mentionedJid?.[0] || m.sender
  const user = global.db.data.users[userId] || {}
  const name = await conn.getName(userId)
  const botname = conn.user?.name || 'Bot'
  const fecha = moment.tz('America/Lima').format('DD/MM/YYYY')
  const hora = moment.tz('America/Lima').format('HH:mm:ss')
  const uptime = clockString(process.uptime() * 1000)
  const totalreg = Object.keys(global.db.data.users).length
  const limit = user.limite || 0

  const botTag = conn.user?.jid?.split('@')[0] || 'bot'
  const botOfc = conn.user?.id === global.conn?.user?.id
    ? `*Bot Oficial:* wa.me/${botTag}`
    : `*Sub Bot de:* wa.me/${global.conn?.user?.jid?.split('@')[0]}`

  const grouped = {}
  const plugins = Object.values(global.plugins).filter(p => !p.disabled)

  for (const plugin of plugins) {
    const cmds = Array.isArray(plugin.command) ? plugin.command : [plugin.command]
    if (!cmds) continue
    const tagList = Array.isArray(plugin.tags) ? plugin.tags : []
    const tag = tagList[0] || '__otros__'
    if (!grouped[tag]) grouped[tag] = []
    for (const cmd of cmds) {
      if (typeof cmd !== 'string') continue
      grouped[tag].push(`🔹 .${cmd}`)
    }
  }

  // CABECERA
  let text = `╭───「 💖 *MENÚ PRINCIPAL* 」───⬣
│ 👤 Hola *${name}*, soy *${botname}*
│ 📅 Fecha: *${fecha}*
│ ⏰ Hora: *${hora}* (🇵🇪)
│ 👥 Usuarios: *${totalreg}*
│ 💎 Tu límite: *${limit}*
│ 🔋 Uptime: *${uptime}*
│ 🤖 Tipo: ${botOfc}
    「 🌐 ENLACES 」
│ 📢 Canal oficial:
│ https://whatsapp.com/channel/0029Vaz6RTR0LKZIKwudX32x
│ 
│ 🌟 Apóyame con una estrella:
│ https://github.com/Angelithoxz/Nino-Nakano
╰──────────────⬣\n`

  // COMANDOS POR CATEGORÍA
  for (const tag of Object.keys(grouped)) {
    const section = tagsMap[tag] || '🧪 OTROS'
    text += `\n╭─〔 ${section} 〕─⬣\n`
    for (const cmd of grouped[tag]) {
      text += `│ ${cmd}\n`
    }
    text += '╰──────────────⬣\n'
  }

  // CONTENIDO DE VIDEO FINAL
  let channelRD = {
    id: '120363374826926142@newsletter',
    name: 'Nino Nakano✨️'
  }

  let banner = 'https://telegra.ph/file/16391c31883e2717b3c7a.jpg'
  let redes = 'https://loli-web-five.vercel.app'
  let textbot = `✨ Disfruta de todos mis comandos, ${name}.\nSíguenos en el canal oficial y apóyanos en GitHub.`

  await conn.sendMessage(m.chat, {
    video: { url: 'https://files.catbox.moe/q8nw6b.mp4' },
    caption: text,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: false,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: false,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']
export default handler

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}h ${minutes}m ${seconds}s`
}