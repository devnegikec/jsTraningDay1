//Defferred
function addAsyncUsingDefferred(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var defferred = Promise.defer();
             
    setTimeout(function(){
        if(!x || !y){
           defferred.reject('invalide arguments');
        }else{ 
                var result = x +y;
                console.log("[SP] returning result");
                defferred.resolve(result);
        }
    },3000);
        

    return defferred.promise;
}


