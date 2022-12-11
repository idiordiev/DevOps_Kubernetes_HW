'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});