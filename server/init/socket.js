const server = require('./server.js');
const io = require('socket.io')(server.http);




module.exports = io;
