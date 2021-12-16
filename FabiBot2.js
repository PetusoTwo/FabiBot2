const { WAConnection, MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (sam) => {
try {	  
if (!sam.hasNewMessage) return
if (!sam.messages) return
if (sam.key && sam.key.remoteJid == 'status@broadcast') return

sam = sam.messages.all()[0]
if (!sam.message) return
global.blocked
sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
const from = sam.key.remoteJid
const type = Object.keys(sam.message)[0]        
const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(sam.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = sam.key.fromMe ? client.user.jid : isGroup ? sam.participant : sam.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = sam.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = sam.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,gracias por usar mi bot, estoy haciendo lo mejor que puedo, Creador: Wa.me//+51938159445, para ver los comandos, escribe *.menu* para ver los audios del bot' escribe *.menu2*', MesssageType.text, {quoted: sam}))
break

case 'menu2':
client.sendMessage(from, 'Hola, gracias por usar Fabot, los audios bot:', MessageType.text, {quoted: 
{ key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "FaboTwo", 'jpegThumbnail': fs.readFileSync('./audios/IMG-20210426-WA0029.jpg')}}
}})
break

case 'nivel':
const getLevel1 = getLevelingLevel(sender)
const lvup =  `✴ _*🧗🏻‍♂️Nivel Actual!͟*_ ✴
	
𓆩*𓆪 *💠 Nombre:* ${pushname} 𓆩*𓆪
	
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevel1} ➫ ${getLevelingLevel(sender)}
🕋rango: ${rango}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
client.sendMessage(from, lvup, MessageType.text, {quoted: { key: {                
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": `✍🏻Nivel ${nivelActual}`, 'jpegThumbnail': fs.readFileSync('./audios/IMG-20210426-WA0029.jpg')}
}}
})
break
                
case 'Foto':
const imagen = fs.readFileSync('./media/IMG-20211211-WA0500.jpg')
client.sendMessage(from, imagen, MessageType.image)
break

case 'inesperado': 
const audio = fs.readFileSync('./audios/inesperado.mp3')
client.sendMessage(from, audio, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: -800})
break

case 'hablen':
const audio2 = fs.readFileSync('./audios/hblencarajo.mp3')
client.sendMessage(from, audio2, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 8000})
break

case 'coño':
const audio3 = fs.readFileSync('./audios/coño.mp3')
client.sendMessage(from, audio3, MessageType.mp3,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 120})
break

case 'bts':
const audio5 = fs.readFileSync('./audios/bts.mp3')
client.sendMessage(from, audio5, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 89})
break

case 'Quienes':
const audio6 = fs.readFileSync('./audios/Quienes.mp3')
client.sendMessage(from, audio6, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 900})
break

case 'ara ara':
const audio7 = fs.readFileSync('./audios/ara.mp3')
client.sendMessage(from, audio7, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: -789})
break

case 'nesquik':
const audio8 = fs.readFileSync('./audios/nesquik.mp3')
client.sendMessage(from, audio8, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 899})
break

case 'helicopter':
const audio9 = fs.readFileSync('./audios/helicóptero.mp3')
client.sendMessage(from, audio9, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: -8976})
break

case 'gambare':
const audio10 = fs.readFileSync('./audios/gambare.mp3')
client.sendMessage(from, audio10, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 892})
break

case 'onichan':
const audio11 = fs.readFileSync('./audios/oni.mp3')
client.sendMessage(from, audio11, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: -67888})
break

case 'baka':
const audio12 = fs.readFileSync('./audios/baka.mp3')
client.sendMessage(from, audio12, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: -6251})
break

case 'yamete':
const audio13 = fs.readFileSync('./audios/yamete.mp3')
client.sendMessage(from, audio13, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 8712})
break

case 'tnt':
const audio14 = fs.readFileSync('./audios/TNT.mp3')
client.sendMessage(from, audio14, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 98267})
break

case 'linda': 
const audio15 = fs.readFileSync('./audios/linda.mp3')
client.sendMessage(from, audio15, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 988})
break

case 'grito':
const audio16 = fs.readFileSync('./audios/grito.mp3')
client.sendMessage(from, audio16, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: 16829})
break

case 'temon':
const audio17 = fs.readFileSync('./audios/temon.mp3')
client.sendMessage(from, audio17, MessageType.audio,
{quoted: sam, Mimetype: 'audio/mp3', ptt: true, duration: -7829976})
break

}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
