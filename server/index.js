const express = require('express');
const path = require('path');
const app = express();
var mongo = require('mongodb');
var monk = require('monk');

var db = monk('mongodb://localhost:27017/test');
var collection = db.get('restaurants');
collection.find({},function(e,docs){
    console.log(docs[0]);
})


app.use(express.static('../client/bin'));
app.use(express.static('../client/css'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/www/'));
});


app.listen(3000, () => console.log('Port 3000'));
