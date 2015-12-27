//Recreate Radio js

var facSpin = (function(){
    var count=  0;
    function up(){
        return ++count;        
    }
    function down(){
        return --count;
        
    }
    return {
        up: up,
        down: down
    }
})();

function Spinner(){
    this.__count = 0;
};

Spinner.prototype.up =function(){
return  ++this.__count;
}
Spinner.prototype.down =function(){
return --this.__count;
}
//Factor methods
var Spinner = (function(){
    function Spinner(){
        this.__count = 0;
    };

    Spinner.prototype.up =function(){
    return  ++this.__count;
    }
    Spinner.prototype.down =function(){
    return --this.__count;
    }
    return Spinner;
})();