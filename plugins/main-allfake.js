import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}
  
global.creador = 'wa.me/51901930696'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.namechannel = '=蜔蜔蜑鉂� 饾悕饾悽饾惂饾惃 饾悕饾悮饾悿饾悮饾惂饾惃 - 饾悅饾悺饾悮饾惂饾惂饾悶饾惀 鈴ね熗熗炌炩槄'
global.namechannel2 = '=蜔蜔蜑鉂� 饾悆饾悶饾惎 饾悁饾惂饾悹饾悶饾惀 - 饾悅饾悺饾悮饾惂饾惂饾悶饾惀 鈴ね熗熗炌炩槄'
global.namegrupo = '岚斸 饾惂饾悽饾惂饾惃 饾惂饾悮饾悿饾悮饾惂饾惃 鈥� 幞嗮潠垦栣ゴ褨幞册ィ 鉂�'
global.namecomu = '岚斸 饾惀饾惃饾惀饾悽 饾悳饾惀饾惍饾悰 鈥� 幞瘁m幞欋褨饾棈幞� 鉂�'
global.listo = '鉂� *Aqu铆 tienes 喔區鈥粚鈥喔�*'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg')

global.canalIdM = ["120363374826926142@newsletter", "120363338297109389@newsletter"]
global.canalNombreM = ["岚斸 饾悕饾悽饾惂饾惃 饾悕饾悮饾悿饾悮饾惂饾惃 饾悗饾悷饾悽饾悳饾悽饾悮饾惀 饾悅饾悺饾悮饾惂饾惂饾悶饾惀鉂�", "岚斸 饾悆饾悶饾惎 饾悁饾惂饾悹饾悶饾惀"]
global.channelRD = await getRandomChannel()

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.a帽o = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

global.rwait = '馃晵'
global.done = '鉁�'
global.error = '鉁栵笍'
global.msm = '鈿狅笌'

global.emoji = '鉂�'
global.emoji2 = '鉁�'
global.emoji3 = '鉁�'
global.emoji4 = '鉂�'
global.emoji5 = '鉁�'
global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

global.wait = '鉂� Espera un momento, soy lenta...';
global.waitt = '鉂� Espera un momento, soy lenta...';
global.waittt = '鉂� Espera un momento, soy lenta...';
global.waitttt = '鉂� Espera un momento, soy lenta...';

var canal = 'https://whatsapp.com/channel/0029VapUpsT9mrGcypZy141s'  
var comunidad = 'https://chat.whatsapp.com/HeKcGyv2idq0tMFRFGN6qL?mode=ac_t'
var web = 'https://github.com/The-King-Destroy'
var web2 = 'https://github.com/The-King-Destroy/Yuki_Suou-Bot' 
let web3 = 'thekingdestroy507@gmail.com'
global.redes = [canal, comunidad, web, web2, web3].getRandom()

let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 1: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 2: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 3: hour = 'L瑟纱岽呩磤 M岽�纱虄岽�纱岽� 馃寗'; break; case 4: hour = 'L瑟纱岽呩磤 M岽�纱虄岽�纱岽� 馃寗'; break; case 5: hour = 'L瑟纱岽呩磤 M岽�纱虄岽�纱岽� 馃寗'; break; case 6: hour = 'L瑟纱岽呩磤 M岽�纱虄岽�纱岽� 馃寗'; break; case 7: hour = 'L瑟纱岽呩磤 M岽�纱虄岽�纱岽� 馃寘'; break; case 8: hour = 'L瑟纱岽呩磤 M岽�纱虄岽�纱岽� 馃寗'; break; case 9: hour = 'L瑟纱岽呩磤 M岽�纱虄岽�纱岽� 馃寗'; break; case 10: hour = 'L瑟纱岽呩磸 D瑟岽� 馃尋'; break; case 11: hour = 'L瑟纱岽呩磸 D瑟岽� 馃尋'; break; case 12: hour = 'L瑟纱岽呩磸 D瑟岽� 馃尋'; break; case 13: hour = 'L瑟纱岽呩磸 D瑟岽� 馃尋'; break; case 14: hour = 'L瑟纱岽呩磤 T岽�蕗岽呩磭 馃寙'; break; case 15: hour = 'L瑟纱岽呩磤 T岽�蕗岽呩磭 馃寙'; break; case 16: hour = 'L瑟纱岽呩磤 T岽�蕗岽呩磭 馃寙'; break; case 17: hour = 'L瑟纱岽呩磤 T岽�蕗岽呩磭 馃寙'; break; case 18: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 19: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 20: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 21: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 22: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break; case 23: hour = 'L瑟纱岽呩磤 N岽忈磩蕼岽� 馃寖'; break;}
global.saludo = hour;

global.nombre = m.pushName || 'An贸nimo'
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.packsticker = `掳.鈳儤潭鈳糕幆艽鈳夺碁酄澩団幆鈨樚垛幆谈鈳粹幆潭岢炧牆蛧鈳儤潭鈳�.掳\n岚斸 Usuario: ${nombre}\n鉂� Bot: ${botname}\n鉁� Fecha: ${fecha}\n獯� Hora: ${tiempo}`;
global.packsticker2 = `\n掳.鈳儤潭鈳糕幆艽鈳夺碁酄澩団幆鈨樚垛幆谈鈳粹幆潭岢炧牆蛧鈳儤潭鈳�.掳\n\n${dev}`
  
global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${nombre}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${nombre},;;;\nFN:${nombre},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }
}}, { quoted: m }

global.icono = [
'https://qu.ax/zzrcJ.jpg',
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: packname, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}