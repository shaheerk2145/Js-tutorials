// if and else
// if (condition is true){
//     code body  here will be executed 
// }
// if(conditon is false){
//     code body  here will not be executed 
//  }

// comparison operators
//  < , >, <= , >= ,= (assignment operator)
// == (check and compare value)
// === (check and compare value and datatype both)


// Control flow is an important concept in JavaScript that allows the program to execute certain code based on conditions.
//  Control flow in JavaScript involves the use of conditional statements.
// The scope of variables declared using the const and let keywords is limited to the block they are declared in
// 26:28 Control flow in JavaScript involves executing different portions of code based on conditions.




const temperature = 50;
if(temperature == 50){
    console.log("temperature is as per expectation");
} 
// console.log("execute");


const balance = 300;
// if(balance == 300) console.log("pesay km hen boht ");  not good way of code

if(balance<299){
    // console.log("less than 500");
}else if(balance<300){
    // console.log("less than 300 ");
}else {
    // console.log("i dont knwo what to do!");
    
}

const userLoggedIn = true;
const atmNo = true;
const loggedInFromMail = true;
const notLoggedIn = false;

if(userLoggedIn && atmNo){
    // console.log("he is allowed to shopping");
}
if(loggedInFromMail && atmNo){
    // console.log("he is also allowed");
}
if(notLoggedIn && atmNo ){
    // console.log("bahar nikalo isko yrr");
    
}



// switch case statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month =4;
switch (month) {
    case 1:
        console.log("january");    
        break;
    case 2:
        console.log("feburary");    
        break;
    case 3:
        console.log("march");    
        break;
    case 4:
        console.log("april");    
        break;
    case 5:
        console.log("may");    
        break;
    case 6:
        console.log("june");    
        break;

    default:
        break;
}
// If there is no break statement added before the default case, default will also be executed. 


// falsy values
// false ,0 ,-0 ,BigInt 0n,"",null ,undefined,NaN

//  truthy values
// "0","false",[],fuction(){},{}," "

// Empty array check
const emptyArr =[]
// if(emptyArr.length===0){
//     console.log("Array is empty");
    
// }else{
//     console.log("Array is not empty");
    
// }

// Empty object 
// const emptyObject ={}
// if (Object.keys(emptyObject).length===0){
//     console.log("Object is empty");
    
// }

false ==0 //true
false == ''//true
0==''//true


// nullish nullish coalescing operator
let val1;
// val1= 5 ??10   //5
// val1 = null ?? 10   //10
// val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 15   //15
console.log(val1);


// ternary operator
const number = 100
number <= 80 ? console.log("less than 80"): console.log("greater than 80")