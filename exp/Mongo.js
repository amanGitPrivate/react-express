var MongoClient = require('mongodb').MongoClient;
// module.exports.init = function(){
//   var database = {};
//   MongoClient.connect('mongodb://localhost:27017/react-express-app', function(err, db) {
//     if (err) {
//       throw err;
//     }else{
//   		database = db;
//       console.log('Database connection successfully established. Current database is : ',database.s.databaseName);
//     }
//   });
// }
var _db;
module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect( "mongodb://localhost:27017/react-express-app", function( err, db ) {
      if (err) {
        throw err;
      }else{
    		_db = db;
        console.log('Database connection successfully established. Current database is : ',_db.s.databaseName);
      }
    } );
  },

  getDb: function() {
    return _db;
  }
};
