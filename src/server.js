const path = require('path');
const express = require('express');
const config = require('./config');

//application object
const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//tells it what to do, ROUTES
app.use('/doc', function(req, res, next) {
    res.end(`Documentation http://expressjs.com/`);
  });
app.use(function(req, res, next) {
    res.end("Hello World!");
  });





  //starts server
  app.listen(config.port, function() {
    console.log(`${config.appName} is listening on port ${config.port}`);
  });