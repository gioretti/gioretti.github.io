"use strict"

var Timer = Backbone.Model.extend({
    
    defaults: {
        elapsedTime: 0,
        running: false,
        interval: 1000 /* 1 second */
    },
    
    start : function(){
        this.set('running', true);
        this.offset = Date.now();
        this.timer = setInterval(
                _.bind(
                    function(){
                        this.set('elapsedTime', Date.now() - this.offset)
                    },
                    this), 
                this.get('interval')
        );
    },
    
    stop : function(){
        this.set('running', false);
        clearInterval(this.timer);
    },
    
    getTime : function(){
        var time = this.get('elapsedTime') / 1000;
        return {
            min: Math.floor(time/60).toString(), 
            sec: Math.floor(time%60).toString(), };
    }
});