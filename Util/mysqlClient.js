/**
 * Created by anmolgupta on 12/09/15.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '',
    password : '',
    database : 'test'
});

connection.connect();

module.exports = connection;