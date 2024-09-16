setTimeout(function(){
    console.log("shaheer khan 1")
},1000);
// setTimeout(function(){
//     console.log("shaheer khan 2")
// },2000);
// setTimeout(function(){
//     console.log("shaheer khan 3")
// },9000);

const print = function(){
    // console.log("beautiful like diamond in the star");
}
// setTimeout(print,2000);

const changeText = function(){ document.querySelector('h1').innerHTML = "EA Sports to the game"}
// setTimeout(changeText,3000);

const deleteText= setTimeout(changeText,4000);
// clearTimeout(deleteText);

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(deleteText);
    console.log("deleted");
    
})