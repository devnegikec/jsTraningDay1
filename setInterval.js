function MyTimer(fn, interval){

    var timerId = null;
    this.start = function(){
        timerId = setInterval(fn, interval);
    };
    this.stop= function(){
        clearInterval(timerId);
    };
}

var myTimer = new MyTimer(
    function(){
        console.log("current time is", new Date())
    }, 3000
);
//---functional approch
/*
*
function startTimer(fn, interval){
    var timerId = setInterval(fn, interval);
    return function stopTimer(){
        clearInterval(tiemrId);
    }
}
*/