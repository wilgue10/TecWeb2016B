var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/Teconologias Web', function (req, res) {
  res.send('con javaScript!');
});
app.post('/Teconologias Web', function (req, res) {
    console.log("REQUEST"req);
    console.log("RESPONT"res);
    console.log("REQUEST HEADERS"req.HEADERS_RECEIVED);
    console.log("RESPONT HEADERS "res.head);
    
  res.send('con POST!');
});

app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});