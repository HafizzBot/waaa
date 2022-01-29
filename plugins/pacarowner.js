let handler = function (m) {
  // this.sendContact(m.chat, '6285850666419', 'HAFIZ', m)
  conn.sendContact(m.chat, '-' , '-', m)
  conn.reply(m.chat, `Ownernya udh punya pawang kakk:v`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
