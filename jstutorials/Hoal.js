// for of
// for (const element of object) {
    // code body
// }

const { Loop } = require("@mui/icons-material");

numbers=[1,2,3,4,5,6,7,8,9];
for (const num of numbers) {
    // console.log(`The number is ${num}`)
}

const greetings ="Good Morning baby";
for (const message of greetings){
    // console.log(`the text msg is ${message}`)
}

//?maps for of
// const map =new Map();
// map.set("Khi","Karachi")
// map.set("Lhr","Lahore")
// map.set("Isb","Islamabad")
// map.set("Rwp","Rawalpindi")
// map.set("Pwh","Peshawar")
// map.set("Qut","Quetta")
// map.set("Skr","Skardu")
// console.log(map);

// for (const [key ,value] of map){
    // const code = map;
    // console.log(`${key} : ${value}`);

// }

// object for of
// const object ={
    // "game1":"Midtown Maddness",
    // "game2":"Red Alert",                         //object is not iterable
    // "game3":"Commandos"
    // game1:"Midtown Maddness",
    // game2:"Red Alert",           //object is not iterable
    // game3:"Commandos"
// }

// for (const [key,value] of object){
    // console.log(`${key} : ${value}`);
    
// }


// now to acess object we use for in Loop

// By using For of loop we can iterate maps also
// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.





// =======================For in loop===========================================
const myExtensions = {
    Py:"python",
    Cpp  :"C++",
    Js:"javascript",
    Rb:"ruby",
    Html:"html",
    React:"jsx",
    Css:"css",
    Php:"php",
}
for (const key in myExtensions ){
    // console.log(`The extension of ${key} is ${myExtensions[key]} `);   
}

const teams =["FcB","Fcb","Rma","Bvb","Atm","MU","Mcy","Chl","Ars",]
for (const key in teams){
    // console.log(`Champions League ${teams[key]}`);
}


// const map =new Map();   Cannot access 'map' before initialization
// map.set("Khi","Karachi")
// map.set("Lhr","Lahore")
// map.set("Isb","Islamabad")
// map.set("Rwp","Rawalpindi")
// map.set("Pwh","Peshawar")
// map.set("Qut","Quetta")
// map.set("Skr","Skardu")
// console.log(map);

// for (const [key ,value] in map){
    // const code = map;
    // console.log(`${key} : ${value}`); can

// }

// ==============forEach===================================
const array = ["RW","LW","ST","RM","LM","CAM","CDM","LB","RB","CB","GK"]
// array.forEach(function(val) {
//     console.log(val);
    
// });
// array.forEach((item)=> {
//     console.log(item);
// });

// function printMe(item){
//     console.log(item)
// }
// array.forEach(printMe);

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
