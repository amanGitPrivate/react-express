var db = require('./Mongo.js');
var _db =  db.getDb();
module.exports = {
    services:function(app){

      app.post('/login',function(req,res){
          var resultArr = [];
          var dbFile = db.getDb();
          dbFile.collection('profile').find({"username":req.body.username, "password":req.body.password}).toArray(function(err, result) {
            if (err) {
              throw err;
            }else{
              resultArr = result;
              res.send(resultArr);
            }
          });
       });

       app.post('/signUp',function(req,res){
          console.log('signUp')
           var resultArr = [];
           var dbFile = db.getDb();
           dbFile.collection('profile').insert({"username":req.body.username, "password":req.body.password},function(err, result) {
             if (err) {
               throw err;
             }else{
               resultArr = result;
               res.send(resultArr);
             }
           });
        });
    }
};
