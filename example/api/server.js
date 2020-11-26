const app = require('./src/app');
var http = require('http');
var port = process.env.PORT || '8080';
var server = http.createServer(app);
server.listen(port, function() {
  console.log('Iniciando servidor no processo');
});
