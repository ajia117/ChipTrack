/*
 * INDEX.JS
 * --------
 * Main entry point for the entire application.
 */

//Import the path module.
var path = require('path');

//Express application.
var express = require('express');
var app = express();
//Configure the Express application.
app.configure(function() {
    
    //Serve static content from the 'public' directory.
    app.use(express.static(path.join(__dirname, 'public')));
});

//Import the ChipTrack game code.
var ct = require('./chiptrack');

//Create an http server with the HTTP module.
var server = require('http').createServer(app).listen(8080);

//Instantiate Socket.IO and have it listen to the Express server.
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    //
    ct.initGame(io, socket);
});
