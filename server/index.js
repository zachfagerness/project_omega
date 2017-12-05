const express = require('express');
const path = require('path');
const app = express();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost:27017/test');
var collection = db.get('restaurants');
    collection.find({},function(e,docs){
        console.log(docs);
    })
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/test";
//
// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost/db_name');
// //
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log(db.collection);
//
//   var query = { address: "Park Lane 38" };
//   //db.collection("restaurants").find(query).toArray(function(err, result) {
//     ///if (err) throw err;
//     //console.log(result);
//     //db.close();
// //  });
//
//
// });

app.use(express.static('../client/bin'));
app.use(express.static('../client/css'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/www/'));
});


app.listen(3000, () => console.log('Port 3000'));
