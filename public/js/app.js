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
        }

        /*
         * Function: bindEvents
         * --------------------
         * Links events emitted by the Socket.IO server
         * to specific member callback functions.
         */
        bindEvents : function() {
            IO.socket.on('connected', IO.onConnected);
            IO.socket.on('error', IO.error);
        }

        onConnected : function() {
            //Cache a copy of the client's socket.IO session ID on the App
            App.mySocketId = IO.socket.socket.sessionid;
        }

        error : function() {
            alert(data.message);
        }


    };

    /*
     * Game Logic Code.
     */
    var App = {

        init: function() {
            
        }

        Player {

        }

    };

    IO.init();
    App.init();

}($));
