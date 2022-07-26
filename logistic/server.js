const http = require('http');
const port = 3000;

const endpoints = {
    '/': 'Japa Dogs',
    '/pedido': 'Pedido'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(endpoints[req.url]);

});

server.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`);
});