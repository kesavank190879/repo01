var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World, This is example of IS and Source Code - 26-November-24, this is UNIT 1st example\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

