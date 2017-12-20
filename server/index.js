const server = require('./init/server.js');
const io = require ('./init/socket.js');
const mongo = require('./init/db.js');
mongo.connect().then(function (db) {
  //console.log(dbk);

})

const path = require('path');
var rr = null;
server.app.use(server.express.static('../client/bin'));
server.app.use(server.express.static('../client/css'));
server.app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/www/'));
    rr = res;
});


server.app.get('/*', function(req, res) {
    res.redirect('/');
});

io.on('connection', function(socket){


  socket.on('chat message', function(msg){
    socket.emit('chat message', msg);
  });

  socket.on('login', function(loginObj){
    mongo.findUser(loginObj.username).then(function (res) {
      if(loginObj.password === res.password){
        //rr.redirect('/account');
        socket.emit('login', true);
      }

    });
  });


});





// Connection URL
//setTimeout(function () {
  // console.log(db);

//}, 200);


// insertUser({username:'zach',password:'123'},function (r) {
//   console.log(r);
// });
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
