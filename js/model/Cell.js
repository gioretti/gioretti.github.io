"use strict"

    var Cell = Backbone.Model.extend({
        hasWord : function(){
            return (typeof this.getWord() === 'undefined') ? false : true;
        },

        getWord : function(){
            return this.get("word");
        },

        setWord : function(word){
            this.set("word", word);
        },

        getLetter : function(){
            this.get("letter");
        },

        setLetter : function(letter){
            this.set("letter",letter);
        }
    });