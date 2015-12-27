var isPrime =  (function(){
    var _result = [];
    return function(a){
        var prime = false;
        if(_result.indexOf(a) !== -1){
            return true;
        }
        for(var i=2; i<a; i++){
            if(a%i === 0){
                prime = true;
                break;
            }
        }
        if(!prime){
            _result.push(a);
            return true;
        }
    }
})();
