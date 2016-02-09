"use strict"

var TimerView = Backbone.View.extend({
    
    tagName: "span",
    className: "timer",
    
    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
    },
    
    template : _.template("<%-min%>:<%-sec%>"),
    
    render : function(){
        $(this.el).html(this.template(this.model.getTime()));
        return this;
    }
    
});
