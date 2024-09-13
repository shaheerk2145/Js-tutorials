// =========use of events
//  1 . use Onclick event in html

// 2 . use OnClick  inside element =>it gives limited access 
// document.getElementById('owl').onclick = function(){
//     alert("this is an owl page");
// }


// 3 . use addEventListener  => best way ,you can acess all attributes 
document.getElementById('owl').addEventListener('click', function (e) {
    // console.log(e);
}, false)


// more events need to study
// type,timeStamp,defaultPrevented ,target,toElement
//srcElement ,currentTarget
// clientX,clientY,screenX,screenY
//altKey,shiftKey,ctrlKey,keyCode

//event propogation has two concepts:
// 1.event bubbling
//In event bubbling, the event starts from the innermost (target) element and 
// moves up the DOM tree towards the outermost element (the window)
// Target element → Parent → Ancestors → Root
// If you click on a <button> inside a <div>, the click event first triggers on the <button>,
//  then on its parent <div>, and so on, until it reaches the root <html> element.





// document.getElementById('images').addEventListener('click',function(e){
//     console.log("images inside ul clicked");
// },false)
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl clicked");
//     e.stopPropagation(); // it stops event bubbling
// },false)

document.getElementById('google').addEventListener('click', function (e) {
    e.preventDefault();   //stops 
    e.stopPropagation(); //stops event bubbling
    console.log('google');

});




// 2.event capturing
// Definition: In event capturing, the event starts from the outermost element and moves inward, 
// towards the target element.
// Flow: Root → Ancestors → Parent → Target element
// Example: If you click on a button inside a <div>, the event first triggers on the root <html>,
//  then travels down the DOM tree to the target <button>





// document.getElementById('images').addEventListener('click',function(e){
//     console.log("images inside ul clicked");
// },true)
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl clicked");
// },true)



// case scenario

document.getElementById('images').addEventListener('click', function (e) {
    // console.log(e.target);
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    // let removeImg = e.target.parentNode;
    // removeImg.remove();
    // removeImg.parentNode.removeChild(removeImg);
    if (e.target.tagName === 'IMG') {
        let removeImg = e.target.parentNode;
        removeImg.remove();
        removeImg.parentNode.removeChild(removeImg);
    }
});