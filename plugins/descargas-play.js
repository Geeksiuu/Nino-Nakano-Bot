import ytdl from 'ytdl-core';
import ytSearch from 'yt-search';
import fs from 'fs';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `✧ 𝐃𝐞𝐛𝐞𝐬 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐧𝐚 𝐜𝐚𝐧𝐜𝐢ó𝐧\n\n✦ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n${usedPrefix + command} secret base`, m);
  }

  try {
    const search = await ytSearch(text);
    const video = search.videos[0];

    if (!video) return conn.reply(m.chat, '✧ 𝐍𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫ó 𝐧𝐢𝐧𝐠𝐮𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨.', m);

    const url = video.url;
    const title = video.title;

    const stream = ytdl(url, {
      filter: 'audioonly',
      quality: 'highestaudio',
    });

    const filename = `/tmp/${title}.mp3`;
    const file = fs.createWriteStream(filename);
    stream.pipe(file);

    file.on('finish', async () => {
      await conn.sendMessage(m.chat, {
        document: fs.readFileSync(filename),
        fileName: `${title}.mp3`,
        mimetype: 'audio/mpeg',
        caption: `🎧 𝐓𝐢𝐭𝐮𝐥𝐨: ${title}\n📎 𝐄𝐧𝐥𝐚𝐜𝐞: ${url}`
      }, { quoted: m });

      fs.unlinkSync(filename);
    });

    file.on('error', (err) => {
      console.error(err);
      conn.reply(m.chat, '❌ 𝐇𝐮𝐛𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐠𝐮𝐚𝐫𝐝𝐚𝐫 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨.', m);
    });

  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '❌ 𝐍𝐨 𝐬𝐞 𝐩𝐮𝐝𝐨 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐞𝐥 𝐚𝐮𝐝𝐢𝐨.', m);
  }
};

handler.command = ['play', 'playaudio'];
handler.help = ['play <canción>'];
handler.tags = ['downloader'];

export default handler;
