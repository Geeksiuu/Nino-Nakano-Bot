export async function before(m, { conn, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup || !m.message) return !0;

  const botSettings = global.db.data.settings[conn.user?.jid] || {};
  const text = m.text || '';
  const commandRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi;
  const isCommand = commandRegex.test(text);

  
  const allowList = ['PIEDRA', 'PAPEL', 'TIJERA', 'serbot', 'jadibot'];
  if (allowList.some(word => text.toUpperCase().includes(word))) return !0;

  
  if (m.chat.endsWith('@newsletter')) return !0;

  
  if (botSettings.antiPrivate && isCommand && !isOwner && !isROwner) {
    await m.reply(`${emoji} Hola @${m.sender.split('@')[0]}, no puedes usar comandos en el chat privado.\n\nPor favor únete al grupo oficial:\n\n${gp1}`, false, {
      mentions: [m.sender],
    });
    await conn.updateBlockStatus(m.chat, 'block');
  }

  return !1;
}