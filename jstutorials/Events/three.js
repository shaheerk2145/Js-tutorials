// let timer = setInterval(handler: TimerHandler, timeout?: number, ...arguments: =>{
    
//     clearInterval(timer)
// }, )  =>syntax

const async = function(str){
    console.log(str,Date.now());
};
const print = setInterval(async,1000,"shaheer");
// console.log(print);
clearInterval(print);
