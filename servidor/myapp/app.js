var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/Teconologias Web', function (req, res) {
  res.send('con javaScript!');
});
app.post('/Teconologias Web', function (req, res) {
  res.send('con post!');
});

app.listen(5050, function () {
  console.log('Example app listening on port 5050!');
});