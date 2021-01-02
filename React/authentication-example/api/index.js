const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// Setup Express middlewares
app.use(morgan('combined')); // Display request logs in the console
app.use(bodyParser.json({type: '*/*'})); // Parses incoming requests to JSON

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);