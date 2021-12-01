import finalhandler from 'finalhandler'
import serveStatic from 'serve-static'
import http from 'http'

const serve = serveStatic('docs', { index: ['index.html'] })

const server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res))
})

const port = 8080 // use anything other than 3000, prest uses that

console.log('Server listening: http://localhost:' + port)
server.listen(port)
