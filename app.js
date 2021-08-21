var http = require('http').createServer(handler);
var fs = require('fs');
//var io = require('socket.io')(http) 
var express = require("express");
var url = require('url');
var path = require('path');
var app = express();

http.listen(8008);
function handler (req, res) {
  fs.readFile(__dirname + '/home.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end(__dirname + '/home.html');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
   return console.log("connected");
  });
}

// function buttonPress(variable, socket){
// io.sockets.emit('request', variable);
// 	variable.writeSync(0);
// 	setTimeout(function(){variable.writeSync(1); io.sockets.emit('fulfilled');}, 300);
// }
// io.on('connection', function (socket){
// 	socket.on('request', function (data) {BUTTON(data, socket);})
// });
app.listen(8888);
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.set('views', './views')
app.set('view engine', 'ejs')
app.get ("", function (req, res) {
  res.render('home', {})
});
// app.get ("/", function (req, res) {
// 	var p = url.parse(req.url, true).query;
// 	var butt = p.button;
// });