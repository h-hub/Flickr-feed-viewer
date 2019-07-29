const app = require('./app');
const http = require('http');

const port = 3001;

const server = http.createServer(app);

server.listen(port, '0.0.0.0', ()=> console.log('Running'));