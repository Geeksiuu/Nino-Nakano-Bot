export async function before(m, { conn, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup || !m.message) return !0;

  const bot = global.db.data.settings[this.user.jid] || {};
  const user = global.db.data.users[m.sender];
  const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi;
  const isCommand = prefixRegex.test(m.text); 
  const isContact = Object.keys(conn.contacts).includes(m.sender); 

  const allowList = ['PIEDRA', 'PAPEL', 'TIJERA', 'serbot', 'jadibot'];
  if (allowList.some(word => m.text?.toUpperCase().includes(word))) return !0;

  if (m.chat === '120363416409380841@newsletter') return !0;

  
  if (bot.antiPrivate && isCommand && !isOwner && !isROwner && !isContact) {
    user.warnPriv = user.warnPriv || 0;

    if (user.warnPriv >= 2) {
      await m.reply(`${emoji} Has sido bloqueado por exceder el límite de advertencias en privado.\nÚnete al grupo oficial para usar el bot:\n\n${gp1}`, false, { mentions: [m.sender] });
      await this.updateBlockStatus(m.chat, 'block');
      user.warnPriv = 0; 
    } else {
      user.warnPriv += 1;
      await m.reply(`${emoji} Hola @${m.sender.split('@')[0]}, no está permitido usar comandos en privado.\nAdvertencia ${user.warnPriv}/3 ⚠️\n\nSi continúas, serás bloqueado.\nÚnete al grupo oficial para usar el bot:\n\n${gp1}`, false, {
        mentions: [m.sender]
      });
    }
  }

  return !1;
}