const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer(function (req, res) {
    if(req.url === '/') {
        let filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else if(req.url === '/about' || req.url === '/about.html') {
        let filePath = path.join(__dirname, 'public', 'about.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else if(req.url === '/contact'|| req.url === '/contact.html') {
        let filePath = path.join(__dirname, 'public', 'contact.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else if(req.url === '/home' || req.url === '/index.html') {
        let filePath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else {
        res.end('Page not found')
    }
})

const port = 5000;

server.listen(port, () => {
    console.log(`server is created on port ${port}`);
});

