function AddAsyncUsingPromise(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
                  
    setTimeout(function(){
        if(!x || !y){
           reject('invalide arguments'));
        }else{ 
                var result = x +y;
                console.log("[SP] returning result");
                resolve(result);
        }
    },3000);
        
    });
    return promise;
}
