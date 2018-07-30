// src/server.js
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routes');

//application object
const app = express();

//handles static files
const publicPath = path.resolve(__dirname, '../public');
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use('/api', router);

  //starts server
  app.listen(config.port, function() {
    console.log(`${config.appName} is listening on port ${config.port}`);
  });