    var BoardView = Backbone.View.extend({

        tagName : "div",
        rowTemplate: _.template('<div class="row"></div>'),
        

        render : function(){
            $(this.el).empty();
            var grid = this.model.grid;
            for(var y=0; y<grid.length; y++ ){
                var rowHTML = this.rowTemplate();
                for(var x=0; x<grid[y].length; x++){
                    rowHTML = $(rowHTML).append(this.renderCell(grid[y][x]));
                }
                $(this.el).append(rowHTML);
            }
            return this;
        },

        renderCell : function(item){
            var cellView = new CellView({model :  item});
            return cellView.render().el;
        }

    });