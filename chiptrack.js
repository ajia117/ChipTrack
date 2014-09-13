/*
 * CHIPTRACK
 * ---------
 * Handles game rule logic.
 */

var io;
var gameSocket;

/**
 * This function is called by index.js to initialize a new
 * game index.
 *
 * @param sio - the Socket.IO library
 * @param socket - the socket object for the connected client
 */
exports.initGame = function(sio, socket) {
    io = sio;
    gameSocket = socket;
    gameSocket.emit('connected', { message: "You are connected!" });
}
