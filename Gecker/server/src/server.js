var express = require('express');
var http = require('http');
var app = express();
exports.Server = function(){
    var hostRoot = __dirname + '/../ui';

    console.log(hostRoot);

    app.use(express.static(hostRoot));

    var server = http.createServer(app);

    var port = process.env.PORT || 3000;
    server.listen(port);

    console.log("listneing on " + port);
    return server;
};