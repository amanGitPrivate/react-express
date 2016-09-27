var express = require('express');
var cors = require('cors');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var open = require('open');
var bodyParser = require('body-parser')
var database = {};

MongoClient.connect('mongodb://localhost:27017/react-express-app', function(err, db) {
  if (err) {
    throw err;
  }else{
		database = db;
		console.log('Database connection successfully established. Current database is : ',database.s.databaseName);
	}
});
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json());

  app.use(cors());
  app.use(express.static(path.join(__dirname,'public')));
  app.post('/',function(req,res){
    var resultArr = [];
    database.collection('profile').find({"username":req.body.username, "password":req.body.password}).toArray(function(err, result) {
      if (err) {
        throw err;
      }else{
    		resultArr = result;
    		res.send(resultArr);
    	}
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
