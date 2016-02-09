"use strict"

var GameView = Backbone.View.extend({
    
    el: "#searchFast",
    template: _.template("\
        <heder>\
            <h1>Search Fast o.O</h1>\
            <p>Words to find: <span id='words'></span></p>\
        </header>\
        <button id='startButton'>Start</button>\
        <span id='timer'></span>\
        <div id='board'></div>\
    "),
    wordsContainer: "#words",
    timerContainer: "#timer",
    boardContainer: "#board",
    
    initialize: function(){
        this.timerView = new TimerView({model: this.model.attributes.timer});
        this.render();
    },
    
    events : {
        "click #startButton" : "startGame"
    },
    
    startGame : function(){
        this.model.start();
        this.renderWords();
        this.renderBoard();
    },
    
    render : function(){
        $(this.el).append(this.template());
        this.renderWords();
        this.renderTimer();
    },
    
    renderBoard : function(){
        this.boardView =  new BoardView({model : this.model.attributes.board});
        $(this.boardContainer).html(this.boardView.render().el);
    },
    
    renderTimer : function(){
        $(this.timerContainer).html(this.timerView.render().el);
    },
    
    renderWords : function(){
        $(this.wordsContainer).empty();
        this.model.attributes.words.each(function(word){
                var view = new WordView({model: word})
                $(this.wordsContainer).append(view.render().el);
            }, this );
        
    }
});

