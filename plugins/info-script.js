let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	
	// ‼️ NOTE: Link script Jangan diubah, dihapus atau diganti
let text = `kwok 🗿`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Group Official', url: sgc}},
    {index: 2, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
    {index: 3, quickReplyButton: {displayText: 'Donasi', id: '.donasi'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler
