let handler = function (m) {
  if (!m.quoted) throw 'Responder mensaje de bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Solo puedo borrar mensajes míos'
  if (!isBaileys) throw '¡El mensaje no fue enviado por un bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
