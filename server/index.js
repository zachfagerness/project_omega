
const path = require('path');
var server = require('./server.js');
var socket = require ('./socket.js');
var monk = require('monk');

server.app.use(server.express.static('../client/bin'));
server.app.use(server.express.static('../client/css'));
server.app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/www/'));
});






var db = monk('mongodb://localhost:27017/test');
var collection = db.get('restaurants');
collection.find({},function(e,docs){
    console.log(docs[0]);
})




server.http.listen(3000, () => console.log('Port 3000'));
