const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 JOIN GROUP BOT 」— - - - ◂*

*GROUP 1 :* https://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY

*GROUP 2 :* https://chat.whatsapp.com/ITB8Dhb3wPJ9JIkWjtd45R

*GROUP 3 :* https://chat.whatsapp.com/IwH8iJyu3NuGz3qWMVKmXh
`
conn.reply(m.chat, tqto, m, { contextInfo: { externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb)).buffer(),
         mediaUrl: sgh
        }
     }
    })
}
handler.help = ['gcbot']
handler.tags = ['main','info']
handler.command = /^(gcbot)$/i
export default handler
