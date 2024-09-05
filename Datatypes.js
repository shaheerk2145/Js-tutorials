
"use strict"; //treat all js code as newer versions
// alert(); we are using nodejs not browser

console.log(3
    +
    3) // code readability should be high

console.log('shaheer');


let name="shaheer";
let age=20;
// let isLogged= false;




// Primitives
// number = 2^53
// boolean = false|true
// bigint
// symbol=>unique
// string =>""
// null = (khaali) aik object ha its datatype is object
// undefined


// Reference (non primitives)
// object
// functions
// array


// console.log(typeof 23);
// console.log(typeof null);
// console.log(typeof undefined);



// let score = "333abc"
// let score = null
let score = undefined
// console.log(typeof score);
// console.log(typeof(score));

let value = Number(score);

// console.log(typeof value);
// console.log(value);
// console.log(typeof Nan);


// conversion::
// "33" ==33
// "33abc" == Nan
// true == 1;false ==0


let isLogged = true;
let isConverLogged = Number(isLogged)
// console.log(isConverLogged);
// console.log(typeof isConverLogged);

// 1=> true
// 0 = false
//"" = false
// "..."=true

let title = 123456
let convertTitle = String(title)
// console.log(convertTitle);
// console.log(typeof convertTitle);


const val = Symbol("1234");
const id = Symbol("12334")
// console.log(typeof val);
// console.log(typeof id);
// console.log(id === val );


const names =["ali","wali","alia"];
console.log(typeof names);

let data = {
    id:"12345",
    password:"23455",
    city:"karachi"
}
// console.table(data);
console.log(typeof data);


const myFunc =  function(){
    console.log('shaheer khan');
    
}
console.log(typeof myFunc);




// stack=> primitives
// heap =>non primitives


let variable ="shaheerkhan"
let variable2 = variable;
console.log(variable2);

variable2="khanshaheer"
console.log(variable2);


const person1 = {
    name:"shaheer",
    age:20,
    class:16
}
console.log(person1);
const person2= person1;
person2.name="shah";
console.log(person2);





// ===================Operations=================================


const num1 = "2";
const num2 = "4";
let num3 = num1 + num2;
// console.log(num3);


// console.log("1" + 2);
// console.log(2 + "1");
// console.log("1"+ "2");
// console.log("2"+ 1+1);
// console.log(1+1+"2");
// console.log((3+4)*5%3);
// console.log(true);
// console.log(+true);   // it increments
// console.log(+"")


let count = 100;
// count++;
++count;
// console.log(count);


// console.log('2'>1);
// console.log(2 > "1");
// ==   -> conversion
// ===  -> conversion and datatype

// console.log(null > 0);
// console.log(null ==0);
// console.log(null >=0);

// console.log(undefined > 0);
// console.log(undefined ==0);
// console.log(undefined >=0);

