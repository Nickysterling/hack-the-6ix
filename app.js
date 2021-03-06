var http = require('http').createServer(handler);
let {PythonShell} = require('python-shell');
var fs = require('fs'); 
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

app.listen(8888);
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/scripts', express.static(__dirname + 'public/scripts'))
app.use('/', express.static(__dirname))
app.set('views', './views')
app.set('view engine', 'ejs')
app.get ("", function (req, res) {
  res.writeHead(302, {
    'Location': '/home'
  });
  res.end();
});
app.get ("/home", function (req, res) {
  res.render('index', {})
});
app.get ("/instructions", function (req, res) {
  res.render('instructions', {})
});
app.get ("/support", function (req, res) {
  res.render('support', {})
});
app.get ("/results", function (req, res) {
  res.render('results', {})
});
app.get ("/bookmarks", function (req, res) {
  res.render('bookmarks', {})
});
app.get("/check", function(req,res){
	var p = url.parse(req.url, true).query;
	var curl = p.checkurl;
  let options = {
    scriptPath: __dirname+'/public/scripts',
    args: [curl]
    };
    PythonShell.run('scraper.py', options, function (err, results) {
      if (err) results = null;
      if (results != null){
      res.end(results[0]);}
      else {res.end("nobody expects the spanish inquisition");}
    });
});
