// const os = require('os')

// const arch = os.freemem()
// console.log(`${arch /1024/1024/1024}`)

// const tm = os.totalmem()
// console.log(`${tm /1024/1024/1024}`)

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('hello from home');
    } else if (req.url == '/userapi') {
    fs.readFile('./UserApi/userData.json', 'utf-8', (error,data) => {
      res.writeHead(200,{"content-type" : "application/json"})
        res.end(data);
        res.end(error);
    })
    } else {
        res.end('can not fount this distancwe');
    }
});

server.listen(8000, '127.0.0.1', (error) => {
    if (error) throw error;
    console.log('Server is running on http://127.0.0.1:8000');
});

