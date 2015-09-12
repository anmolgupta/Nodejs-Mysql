/**
 * Created by anmolgupta on 12/09/15.
 */
var express = require('express');
var mysqlClient = require('../Util/mysqlClient');

var centre = express.Router();

centre.get('/list',function(req,res){

    mysqlClient.query('SELECT CenterID,CenterName,ContactNo from centers;', function(err, rows, fields) {
        if (err) {
            console.log('Error while performing query');
            return res.send({error:err});
        }
        else
            return res.send(rows);
    })



});

module.exports = centre;
