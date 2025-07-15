import ytdl from 'ytdl-core';
import ytSearch from 'yt-search';
import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`✧ 𝐃𝐞𝐛𝐞𝐬 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐧𝐚 𝐜𝐚𝐧𝐜𝐢ó𝐧\n\n✦ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n${usedPrefix + command} secret base`);

  try {
    let search = await ytSearch(text);
    let video = search.videos[0];

    if (!video) return m.reply('✧ 𝐍𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫ó 𝐥𝐚 𝐜𝐚𝐧𝐜𝐢𝐨́𝐧.');

    let url = video.url;
    let title = video.title;
    let thumb = video.thumbnail;
    let duration = video.timestamp;

    let audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });

    let filename = `audio_${Date.now()}.mp3`;
    let filepath = `/tmp/${filename}`;
    const writeStream = fs.createWriteStream(filepath);

    audioStream.pipe(writeStream);

    writeStream.on('finish', async () => {
      await conn.sendMessage(m.chat, {
        document: fs.readFileSync(filepath),
        fileName: `${title}.mp3`,
        mimetype: 'audio/mpeg',
        caption: `🎧 𝐓í𝐭𝐮𝐥𝐨: ${title}\n⏱️ 𝐃𝐮𝐫𝐚𝐜𝐢ó𝐧: ${duration}\n📎 𝐄𝐧𝐥𝐚𝐜𝐞: ${url}`
      }, { quoted: m });

      fs.unlinkSync(filepath);
    });

    writeStream.on('error', err => {
      console.error(err);
      m.reply('❌ 𝐎𝐜𝐮𝐫𝐫𝐢ó 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐞𝐥 𝐚𝐮𝐝𝐢𝐨.');
    });

  } catch (e) {
    console.error(e);
    m.reply('❌ 𝐄𝐫𝐫𝐨𝐫 𝐚𝐥 𝐛𝐮𝐬𝐜𝐚𝐫 𝐨 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐞𝐥 𝐚𝐮𝐝𝐢𝐨.');
  }
};

handler.command = ['play', 'playaudio'];
handler.help = ['playaudio <canción>'];
handler.tags = ['downloader'];

export default handler;
