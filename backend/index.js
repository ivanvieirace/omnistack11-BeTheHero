const express = require('express');

const server = express();

server.get('/', (request, response) =>
  response.json({ message: 'Teste Servidor'}),
);

server.listen(3333);
