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

    //Player Events
    gameSocket.on('createNewGame', createNewGame);
    gameSocket.on('playerReady', playerReady);
    gameSocket.on('nextRound', nextRound);
    gameSocket.on('playerJoinGame', playerJoinGame);
    gameSocket.on('playerQuit', playerQuit);
    gameSocket.on('playerBet', playerBet);
    gameSocket.on('playerFold', playerFold);
    gameSocket.on('playerCheck', playerCheck);
    gameSocket.on('playerRaise', playerRaise);
}

function createNewGame() {
    var thisGameId = (Math.random() * 100000) | 0;
    var newRoom = {
    this.emit('newGameCreated', {
}

var MAX_ROOM_SIZE = 10;
var rooms = [];

var Room : {
       gameId: 0,

       mySocketId: '',

       currentRound: 0,

       smallBlind: 0,

       bigBlind: 0,

       rotateDealer: true,

       buyIn: false,

       timedTurns: false,

       turnLength: 6000,
       
       players : [],

       roundNo:
}
