//localhost:3000


//szerver létrehozása - terminálban ctrl+c-vel tudjuk leállitani (node server.js)
// var http = require('http');

// var port = process.env.PORT || 3000;
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello browser!\n');
// }).listen(port);

//express szerver létrehozása (npm init), majd telepítése: npm install express --save
var express = require('express');
var nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
var app = express();

//nunjucks-t és express-t használunk (npm install nunjucks --save)
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

////
app.use(bodyParser.urlencoded({ extended: false})); //npm install body-parser --save
////

app.use(function (req, res, next) {         //middleware (nextel lépked előre a middlewarek között)
  console.log(req.method + ' ' + req.url);
  next();
});

//statikus fájlkiszolgáslás middleware
app.use(express.static('public'));

// nunjucks template használat
app.get('/hello/:name', function (req, res) {
  const name = req.params.name; //kinyerem a nevét hogy a címsorba berakható legyen
  const city = req.query.city;
  res.render('hello.njk', { name, city }); //a request paraméterei közül lekérem a name kulcsút
});

app.get('/alma', function (req, res) {
  res.render('alma.njk');
});

app.post('/alma', function (req, res) {
  const appleCount = req.body.appleCount;
  res.render('alma.njk',{ appleCount })
})

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("elindult a szerver...");
});
