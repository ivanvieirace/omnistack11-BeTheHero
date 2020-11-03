const express = require('express');

const server = express();

server.get('/', (request, response) => response.send('Olá Mundo'));

server.listen(3333);
