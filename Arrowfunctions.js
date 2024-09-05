const user = {
    name: "alex adams",
    price: 99,
    welcomeMsg: function () {
        console.log(`${this.name} , welcome to the show`);
        // console.log(this);

    }
}
// user.welcomeMsg();
// user.name="peter"
// user.welcomeMsg();
// console.log(this); //{} bcz global ma iska koi context nhi ha jbhi ye output arha

// notes for this
/* Context: The value of this in JavaScript depends on the context in which it is called. 
It can refer to different things depending on where and how it is used.

Global Context: When this is used in the global context (outside of any function),
 it refers to the global object. In browsers, this is the window object.

 Object Method: When used inside a method (a function that is a property of an object),
  this refers to the object that owns the method.

  Constructor Function: In a constructor function (a function used with the new keyword to create objects), 
  this refers to the newly created instance of the object.

  Event Handlers: In event handlers, this refers to the element that received the event.
  call, apply, and bind: These methods allow you to explicitly set the value of this in a function.
 */

// this cannot be used with function 
// const chai = function(){
//     let course="freelancing";
//     console.log(this.course);//undefined
    
// }
// chai()
// console.log(this);

//arrow functions
// const arrowfunction = (num1 ,num2)=>{
//     return num1*num2;
// }
// console.log(arrowfunction(3,6.6));

// implicit return
// const return1 =(num1,num2)=>(num1 + num2);
// const return1 =(num1,num2)=>num1 + num2;

// object with arrow func
// const return1 =(num1,num2)=>({name:"shaheer"});

// console.log(return1(3,6.6));


// Immediately Invoked Function Expressions IIFE

// Immediately Invoked Function Expressions (IIFE): the secret sauce for encapsulating code and maintaining a clean global scope. In this video, you'll uncover the power of IIFEs and how they can enhance code organization, protect variables, and prevent naming collisions. 
// Whether you're a seasoned developer or just starting out, understanding and utilizing IIFEs will level up your JavaScript skills. Get ready to dive into this transformative concept and supercharge your coding prowess!

// (function Sum(num1,num2){
//     console.log(num1 + num2)
// })(3,5);
((name) => {
    console.log(`level sb k niklengey pr niklengye ${name}`);
})("shaheer");


// ===========


// {}=> memory creation phase
// =>executionphase

/* 1. global execution 
    allocate in this


2.memory creation phase
   val1 = undefined
   val2 = undefined
   addNum =>defintion of function
   result1= undefined
   result2= undefined
3. execution phase

val1 = 10;
val2 = 5;
addNum =>  [    new environment  table + execution phase      ]=>memory phase for addNum
                                                               =>val1=undefined 
                                                               =>val2=undefined 
                                                               =>total=undefined 
                                                            =><Execution></Execution> phase for addNum
                                                             num1=10  
                                                             num2=5 
                                                             total =15  =>return to parent execution phase

result1=15
result2=>[    new environment  table + execution phase      ]=>memory phase for addNum
                                                                =>val1=undefined 
                                                                =>val2=undefined 
                                                                =>total=undefined 
                                                                =><Execution></Execution> phase for addNum
                                                                num1=10  
                                                                num2=5 
                                                                total =15  =>return to parent execution phase */

// ===============================================
// call stack
