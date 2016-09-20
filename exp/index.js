var express = require('express');
var app = express();
var path = require('path');
var open = require('open');

app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Origin","Origin");
	next();
})

app.get('/', function (req, res) {
  var data = [{"name":"aman"}];
  res.jsonp(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
