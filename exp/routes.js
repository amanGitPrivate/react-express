var db = require('./Mongo.js');
var _db =  db.getDb();
module.exports = {
    services:function(app){

      app.post('/login',function(req,res){
          var resultArr = [];
          var dbFile = db.getDb();
          var wrongpassword = "wrongpassword";
          var wrongusername = "wrongusername"
          dbFile.collection('profile').find({"username":req.body.username}).toArray(function(err, result) {
            if (err) {
              throw err;
            }else{
              if(result.length > 0){
                  dbFile.collection('profile').find({"password":req.body.password}).toArray(function(err, resultpass) {

                    if(resultpass.length > 0){
                      if (err) {
                        throw err;
                      }else{
                        resultArr = result;
                        res.send(resultArr);
                      }
                    }
                    else{
                      res.send(wrongpassword);
                    }
    
                  });
              }else{
                res.send(wrongusername);
              }

            }
          });
       });

       app.post('/signUp',function(req,res){
          console.log('signUp')
           var resultArr = [];
           var dbFile = db.getDb();
           dbFile.collection('profile').insert(req.body,function(err, result) {
             if (err) {
              console.log('error',err);
             }else{
               resultArr = result;
               res.send(resultArr);
             }
           });
        });

       app.post('/update',function(req,res){
          console.log('update')
           var resultArr = [];
           var dbFile = db.getDb();
           dbFile.collection('profile').update({email:req.body.email},
              req.body
            ,{
               upsert: true             
             },function(err, result) {
             if (err) {
              console.log('error',err);
             }else{
               resultArr = result;
               res.send(resultArr);
             }
           });
        });
    }
};
