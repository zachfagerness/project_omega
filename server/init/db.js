const monk = require('monk');
module.exports = monk('mongodb://localhost:27017/test');
