const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var cors = require('cors')

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//Rotas
const index = require('./routes/index');

//encoded usado nos Forms
app.use(bodyParser.urlencoded({
    extended: true
}));
//encoded usado nos Forms
app.use(bodyParser.json());
//detecta todas as rotas na pasta routes
app.use('/', index);
app.use(cors())


module.exports = app;
