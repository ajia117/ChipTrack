; //exit any previously loaded js

//Main funct.
jQuery(function($) {
    'use strict';

    /*
     * IO Handling
     * -----------
     * Handles IO connections and event handling.
     */
    var IO = {

        /*
         * Function: init
         * --------------
         * Called when the page is displayed.
         * Connects the Socket.IO client to the Socket.IO server.
         */
        init : function() {
            IO.socket = io.connect();
            IO.bindEvents();
        },

        /*
         * Function: bindEvents
         * --------------------
         * Links events emitted by the Socket.IO server
         * to specific member callback functions.
         */
        bindEvents : function() {
            IO.socket.on('connected', IO.onConnected);
            IO.socket.on('newGameCreated', IO.onNewGameCreated);
            IO.socket.on('playerJoinedRoom', IO.playerJoinedRoom);
            IO.socket.on('playerReady', IO.playerReady);
            IO.socket.on('beginRound', IO.beginRound);
            IO.socket.on('nextPhase', IO.nextPhase);
            IO.socket.on('roundEnd', IO.roundEnd);
            IO.socket.on('error', IO.error);
        },

        onConnected : function() {
            //Cache a copy of the client's socket.IO session ID on the App
            App.mySocketId = IO.socket.socket.sessionid;
        },

        /*
         * Function: onNewGameCreated
         * --------------------------
         * A new game has been made with a random
         * unique game ID.
         *
         * @param data - {{gameId: int, mySocketId: *}}
         */
        onNewGameCreated : function(data) {
            
        },

        playerJoinedRoom : function() {
            
        },

        playerReady : function() {

        },

        beginRound : function() {

        },

        nextPhase : function() {

        },

        roundEnd : function() {

        },

        error : function() {
            alert(data.message);
        }


    };

    /*
     * Game Logic Code.
     */
    var App = {

        /*
         * Function: init
         * --------------
         * Called when the page is displayed.
         */
        init : function() {
            App.cacheElements();
            App.showInitScreen();
            App.bindEvents();

            //Initialize external libs.
            FastClick.attach(document.body);
        },

        /*
         * Function: cacheElements
         * -----------------------
         * Creates reference to on-screen elements used throughout
         * the game.
         */
        cacheElements : function() {
            App.$doc = $(document);
            App.$mainMenuScreen = $('#main-menu-screen');
            App.$aboutScreen = $('#about-screen');
            App.$newGameScreen = $('#create-game-screen');
            App.$joinGameScreen = $('#join-game-screen');
            App.$tableOverview = $('#table-overview-screen');
            App.$soloView = $('#individual-overview-screen');
        },

        /*
         * Function: bindEvents
         * --------------------
         *  Create some click handlers for the various buttons
         *  that appear on-screen.
         */
        bindEvents : function() {
            App.$doc.on('click', '#btn_createGame', App.Player.onCreateClick);
            App.$doc.on('click', '#btn_joinGame', App.Player.onJoinClick);
            App.$doc.on('click', '#btn_about', App.about);
            App.$doc.on('click', '#btn_ready', App.Player.readyUp);
            App.$doc.on('click', '#btn_gameOverview', App.Player.gameOverview);
            App.$doc.on('click', '#btn_quitGame', App.Player.quit);
        },

        showInitScreen : function() {

        },

        Player : {
        
        }

    };

    IO.init();
    App.init();

}($));
