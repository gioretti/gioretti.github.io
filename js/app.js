"use strict"

$(document).ready(function() {
    window.game = new Game();
    window.gameView = new GameView({
        model: window.game
    });
});


