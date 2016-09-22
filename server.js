const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('www'));

http.createServer(app).listen(3030, () => console.log('express rodando na porta 3030'));
