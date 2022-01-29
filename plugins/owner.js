function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // Kalo mau tanya² jgn dlu, hp gw lagi rusak :v
  // F this.sendContact(m.chat, '6285850666419', 'Hafiz Owner', m)
stc = conn.sendContact(m.chat, '6285850666419', 'Hafizz Official', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Developer Z E R O  B O T *', 'status@broadcast')
}
handler.command = ['owner']

module.exports = handler
