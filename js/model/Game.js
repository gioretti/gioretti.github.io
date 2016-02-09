"use strict"

var Game = Backbone.Model.extend({
        
    defaults : {
        words : new WordCollection([new Word({text : 'hello'}),
                                    new Word({text : 'search'}),
                                    new Word({text : 'word'}),
                                    new Word({text : 'fast'})])
    },
    
    initialize : function(){
        this.listenTo(this.getWords(), "finish", this.stop);
        this.set('timer', new Timer());
    },
    
    getBoard : function(){
        return this.get("board");
    },
    
    setWords : function(words){
        this.set('words', new WordCollection(words));
    },
    
    getWords : function(){
        return this.get('words');
    },
    
    start : function(){
        this.getWords().each(function(word){word.initialize()});
        this.set('board', new Board());
        this.get('board').placeWordCollection(this.getWords());
        this.get('board').populateCells();
        this.get('timer').start();
    },
    
    stop : function(){
        var time = this.get('timer').getTime();
        alert("FINISHED IN: " + time.min + ":" +time.sec);
        this.get('timer').stop();
    }
    
});

