"use strict"
var WordView = Backbone.View.extend({
    
    tagName: "em",
    template: _.template("<%- text %> "),
    
    initialize : function(){
        this.listenTo(this.model, 'change', this.render);
    },
    
    render: function(){
        this.$el.html(this.template({text : this.model.attributes.text}));
        if(this.model.attributes.found){
            this.$el.addClass('found');
        }
        return this;
    }
    
});


