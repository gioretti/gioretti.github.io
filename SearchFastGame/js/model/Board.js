    var Board = Backbone.Model.extend({
    
        defaults: {
            size: 20
        },

        initialize: function(){
            this.generateGrid();
        },
        
        generateGrid : function(){
            var size = this.getSize();
            this.grid = [];
            for(var _y = 0; _y < size; _y++){
                this.grid[_y] = [];
                for(var _x = 0; _x < size ; _x++){
                    var cell = new Cell({x : _x, y : _y});
                    this.grid[_y][_x] = cell;
                }
            }
        },

        getRandomCoordinates : function(){
            var _x = Math.floor(Math.random()*10);
            var _y = Math.floor(Math.random()*10);
            return {y : _y, x : _x};
        },

        getCell: function(y,x){
            return this.grid[y][x];
        },
        
        setSize : function(size){
            this.set("size", size);
            this.generateGrid();
        },

        getSize : function(){
            return this.get("size");
        },

        placeWord: function(word){
            var wordIsPlaced = false;
            while(!wordIsPlaced){
                var startPoint = this.getRandomCoordinates();
                if(this.isPositionInsideBoard(startPoint, word)){
                    var cells = this.getCellsForWord(startPoint, word);
                    if(this.isPositionFree(cells)){
                        for(var i=0; i<word.getLength(); i++){
                            cells[i].setWord(word);
                            cells[i].setLetter(word.getLetter(i));
                        }
                        wordIsPlaced = true;
                    }
                }
            }
        },
        
        placeWordCollection: function(wordCollection){
            wordCollection.each(_.bind(function(word){
                this.placeWord(word)
            },this));
        },

        populateCells : function(){
            var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for(var y=0; y<this.getSize(); y++){
                for(var x=0; x<this.getSize(); x++){
                    var cell = this.getCell(y,x);
                    if(!cell.hasWord()){
                       var letter = symbols.charAt(Math.floor(Math.random() * symbols.length));
                       cell.setLetter(letter);
                    }
                }
            }
        },

        getCellsForWord : function(startPoint, word){
            var cells = [];
            var x = startPoint.x;
            var y = startPoint.y;
            for(var i=0; i<word.getLength(); i++){
                if(word.isHorizontal()){
                    x = startPoint.x + i;
                } else {
                    y = startPoint.y + i;
                }
                cells.push(this.getCell(y, x));
            }
            return cells;
        },

        isPositionInsideBoard : function(startPoint, word){
            var isValid;
            if(word.isHorizontal()){
                isValid = (startPoint.x + word.getLength() >= this.getSize()) ? false : true;
            } else {
                isValid = (startPoint.y + word.getLength() >= this.getSize()) ? false : true;
            }
            return isValid;
        },

        isPositionFree : function(cells){
            var isValid = true;
            for(var i=0; i< cells.length; i++){
                if(cells[i].hasWord()){
                    isValid = false;
                    break;
                }
            }
            return isValid;
        }
    });