import moment from 'moment-timezone'

const emojiMap = {
  sticker: '🖼', figu: '🎴', yt: '📥', play: '🎶', ping: '📶', info: 'ℹ️',
  lolicon: '👧', loli: '👧', ai: '🧠', menu: '📜', help: '❓', calc: '🧮',
  game: '🎮', owner: '👑', group: '🛡', jadibot: '✨', tiktok: '🎵', gpt: '💬'
}

const categories = {
  '🖼 STICKERS': ['sticker', 'figu'],
  '🚀 DESCARGAS': ['yt', 'play', 'descarga', 'descargar', 'tiktok', 'media'],
  '🎮 JUEGOS': ['game', 'juego'],
  '📚 BUSCADORES': ['ai', 'gpt', 'ia'],
  '🧰 HERRAMIENTAS': ['ping', 'info', 'calc'],
  '👑 OWNER': ['owner', 'restart', 'ban'],
  '🛠 RPG': ['minar', 'trabajar', 'aventura'],
  '🧪 OTROS': []
}

function getAutoGroup(cmdName) {
  for (let [group, keywords] of Object.entries(categories)) {
    if (keywords.some(k => cmdName.toLowerCase().includes(k))) {
      return group
    }
  }
  return '🧪 OTROS'
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

  const plugins = Object.values(global.plugins).filter(p => !p.disabled && p.command)
  for (const plugin of plugins) {
    const cmds = Array.isArray(plugin.command) ? plugin.command : [plugin.command]
    for (const cmd of cmds) {
      if (!cmd) continue
      const cmdName = typeof cmd === 'string' ? cmd.replace(/^\.?/, '').split(' ')[0] : ''
      const emoji = emojiMap[cmdName] || '🔹'
      const group = getAutoGroup(cmdName)
      grouped[group] = grouped[group] || []
      grouped[group].push(`${emoji} .${cmdName}`)
    }
  }

  let text = `╭───「 💖 𝗠𝗘𝗡𝗨 」───⬣
│ Hola ${name}, soy *${botname}* 👋
│ 📅 Fecha: *${fecha}*
│ ⏰ Hora: *${hora}* (🇵🇪)
│ 👥 Registrados: *${totalreg}*
│ 💎 Tu límite: *${limit}*
│ 🔋 Uptime: *${uptime}*
│ 🤖 Tipo: ${botOfc}
╰──────────────⬣\n`

  for (let [group, cmds] of Object.entries(grouped)) {
    text += `\n╭─〔 ${group} 〕─⬣\n`
    for (let c of cmds.sort()) {
      text += `│ ${c}\n`
    }
    text += '╰──────────────⬣\n'
  }

  let channelRD = {
    id: '120363374826926142@newsletter',
    name: 'Nino Nakano✨️'
  }

  let banner = 'https://telegra.ph/file/16391c31883e2717b3c7a.jpg'
  let redes = 'https://loli-web-five.vercel.app'
  let textbot = `✨ Disfruta de todos mis comandos, ${name}.\nPuedes ver más en el canal oficial.`

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