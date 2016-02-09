"use strict"

var Word = Backbone.Model.extend({
    initialize : function(){
        var _horizontal = Math.random() < 0.5 ? true :  false;
        this.set("horizontal", _horizontal);
        this.set("found", false);
    },

    getLength : function(){
        return this.get("text").length;
    },

    getLetter : function(index){
        return this.get("text").charAt(index);
    },

    isHorizontal : function(){
        return this.get("horizontal");
    },
    
    setAsFound : function(){
        this.set("found", true);
    },
    
    hasBeenFound : function(){
            return this.get("found");
    }
});
