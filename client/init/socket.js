import io from 'socket.io-client';

var socketOBj = {
  socket : io('http://localhost:3000'),
  ready: false
}

socketOBj.socket.on('connect', function(s){
  socketOBj.ready = true;
});

module.exports = socketOBj;
