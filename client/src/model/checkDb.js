import io from 'socket.io-client';

var socket = io('http://localhost:3000');

socket.on('connect', function(s){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});


class CheckDb {
  checkLogin(loginObj) {

    socket.emit('login',loginObj);
    socket.on('login', function(msg){
        return true;
    });

  }
}
const checkDb = new CheckDb();
export default checkDb;
