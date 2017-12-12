var MongoClient = require( 'mongodb' ).MongoClient;

var dbObject={
  db:null,

  connect: function() {
    //console.log('db',this.db);
    return new Promise(function(resolve, reject) {
      MongoClient.connect( "mongodb://localhost:27017/", function( err, client ) {
        this.db = client.db('test');
        resolve(this.db);
      });
    });
  },

  getDb: function() {
    return _db;
  },

  insertUser : function(user) {
    return new Promise(function(resolve, reject) {
      this.db.collection('users').insert(user, function(err, result) {
        err ? reject(err) : resolve(result);
      });
    });
  },

  findUser : function(user) {
    return new Promise(function(resolve, reject) {
      this.db.collection('users').findOne({username:user}, function(err, result) {
        err ? reject(err) : resolve(result);
      });
    });
  }

}

module.exports = dbObject;
