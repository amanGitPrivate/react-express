var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var open = require('open');
var db = require('./Mongo.js');
var route = require('./routes.js');
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));

console.log('dbFile',db.connectToServer());
console.log('>>>>>>>.',db.getDb());
route.services(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
