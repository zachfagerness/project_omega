//
// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;
//
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
//
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });
//
// http.listen(port, function(){
//   console.log('listening on *:' + port);
// });

const express = require('express');
const path = require('path');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var monk = require('monk');

app.use(express.static('../client/bin'));
app.use(express.static('../client/css'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/www/'));
});




io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  console.log('a user connected');
});


var db = monk('mongodb://localhost:27017/test');
var collection = db.get('restaurants');
collection.find({},function(e,docs){
    console.log(docs[0]);
})




http.listen(3000, () => console.log('Port 3000'));
