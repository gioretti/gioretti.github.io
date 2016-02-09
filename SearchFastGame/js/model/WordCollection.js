"use strict"
var WordCollection = Backbone.Collection.extend({
    
    model: Word,
    
    initialize : function(){
        this.listenTo(this, "change:found", this.changeFound);
    },
    
    changeFound : function(model, val, options){
        if(this.areAllWordFound()){
            this.trigger("finish");
        }
    },
    
    areAllWordFound : function(){
        return (this.where({found : false}).length > 0) ? false : true;
    }
    
    
});