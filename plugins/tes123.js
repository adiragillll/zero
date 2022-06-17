import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Perkenalkan, saya adalah Ultraman zero`
   let footer = `𝐔ltra 𝐙ero`
   
    let d1 = 'https://telegra.ph/file/af9e90f484f657fc4931b.jpg'
    let d2 = 'https://telegra.ph/file/9a27408cf344bd3a6adde.jpg'
    let d3  = 'https://telegra.ph/file/6803db99dc013b07c3587.jpg'
    let d4 = 'https://telegra.ph/file/4244ba51c0214e2cd93cd.jpg'
    let d5 = 'https://telegra.ph/file/9422e3a7341754770147f.jpg'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
/*const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    callButton: {
                        displayText: '📞 Add me',
                        phoneNumber: nomorown
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'PING',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'DONASI',
                        id: '.donasi'
                    }
                },
            ]
        }
        return await conn.sendMessage(m.chat, message)*/
        
        //FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": 'Hai Kak ' + conn.getName(m.sender),
  "description": wm, 
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": namebot,
  "productImageCount": 1
        },
  "businessOwnerJid": `0@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }




    conn.sendButton(m.chat, info, footer, td, ['...', '...'],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.customPrefix = /^(zero|ultraman|ultra)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}