var server = require('./server.js');
var io = require('socket.io')(server.http);

module.exports.socket = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});
io.on('connection', function(socket){
  // io.emit('chat message', "msg");
  // socket.on('chat message', function(msg){
  //   io.emit('chat message', msg);
  // });
  // console.log('a user connected');
  module.exports.socket = socket;
});
