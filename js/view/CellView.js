var CellView = Backbone.View.extend({

    tagName: "div",
    className: "cell",
    template: _.template('<div class="content"><%- letter %></div>'),

    initialize : function(){
        this.listenTo(this.model.getWord(), 'change:found', this.render);
    },

    events: {
        "click" : "checkClick",
    },

    render : function(){
        $(this.el).html(this.template({letter: this.model.attributes.letter}));
        if(this.model.hasWord()){
            if(this.model.getWord().hasBeenFound()){
                $(this.el).addClass('found');
            }
        }
        return this;
    },

    checkClick : function(){
        if(this.model.hasWord()){
            this.model.getWord().setAsFound();
        }
    }
});