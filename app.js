'use strict';
const http = require('http');
const hostname = '127.0.0.1';
const port = 3333;

const express = require('express')
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);
const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');

app.use('/rangers', rangersController); 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});