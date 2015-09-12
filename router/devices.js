/**
 * Created by anmolgupta on 12/09/15.
 */
var express = require('express');
var mysqlClient = require('../Util/mysqlClient');

var device = express.Router();

device.get('/centerId/:centerId',function(req,res){

    var centerId = req.params.centerId;

    mysqlClient.query('SELECT ID,DeviceID from devices where CenterID = '+centerId+';', function(err, rows, fields) {
        if (err) {
            console.log('Error while performing query');
            return res.send({error:err});
        }
        else
            return res.send(rows);
    })



});

module.exports = device;
