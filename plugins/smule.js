let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'pone primero el link pete'
  global.API('xteam', '/dl/smule', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^$/i

module.exports = handler
