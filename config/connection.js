const { connect, connection } = require('mongoose');
//make connection to mongodb
connect('mongodb://127.0.0.1:27017/social-network');

module.exports = connection;