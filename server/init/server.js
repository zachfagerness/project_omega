const express = require('express');
const app = express();
const http = require('http').Server(app);




module.exports.express = express;
module.exports.app = app;
module.exports.http = http;
module.exports.runServer =()=>{
  http.listen(3000, () => console.log('Port 3000'));
}
