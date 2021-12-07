const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('here is our short description')
    } else {
        res.end(`
    <h1>Ooops !</h1>
    <p>we can't seem to find this page</p>
    <a href="/" >Home </a>
    `)
    }
})

server.listen(5000)