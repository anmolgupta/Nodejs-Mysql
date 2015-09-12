var express = require('express');
var app = express();
var path = require('path');
var centre = require('./router/centre');
var device = require('./router/devices');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/centre',centre);
app.use('/device',device);

app.listen(process.env.PORT || 8128,function(){
    console.log('ready to rock :D');
});