const server = require('./init/server.js');
const io = require ('./init/socket.js');
const db = require('./init/db.js');
const path = require('path');

server.app.use(server.express.static('../client/bin'));
server.app.use(server.express.static('../client/css'));
server.app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/www/'));
});
server.app.get('/*', function(req, res) {
    // Prepare the context
    console.log('sda');
    res.redirect('/');
});

io.on('connection', function(socket){
  console.log(socket.id);
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});


server.runServer();
// var express = require('express');
// var fs = require('fs');
// var path = require('path');
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var App = require ('../client/index.js');
// //import Hello from './Hello.js';
//
// function handleRender(req, res) {
//   // Renders our Hello component into an HTML string
//     const html = ReactDOMServer.renderToString(<App />);
//     var index = '<!DOCTYPE html><html lang="en"><head><title>Zachs App</title></head><body><div id="app"></div><script type="text/babel" src="build/index.js"></script></body></html> '
//     // Inserts the rendered React HTML into our main div
//     const document = index.replace(/<div id="app"><\/div>/, '<div id="app">'+html+'</div>');
//
//     // Sends the response back to the client
//     res.send(document);
//
// }
//
// const app = express();
//
// // Serve built files with static files middleware
// //app.use('/build', express.static(path.join(__dirname, 'build')));
//
// // Serve requests with our handleRender function
// app.get('*', handleRender);
//
// // Start server
// app.listen(3000);
