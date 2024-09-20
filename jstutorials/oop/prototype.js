let array = ["khi","hyd","skr","mpk","bdn"]
let string="mount sikaram";

let cityCode = {
    khi:"karachi",
    hyd:"hyderabad",
    skr:"Sukkur",
    mpk:"mirpur khas",
    bdn:"badin",

    getCitiesName : function(){
        console.log(`The city name of khi is ${this.khi}`);
    }
}

Object.prototype.badin = function(){
    console.log(`badin is present in all objects`);
}


Array.prototype.heyKarachi = function(){
    console.log(` hello Karachi`);
}
cityCode.badin()
// array.badin();     //it will give output bcz whatever prototype has been made through will also be accessible by array,function,strings etc
array.heyKarachi()
// cityCode.heyKarachi()   //error 

// string.protoype.mountain= function(){
//     console.log(`sikaram is present in all objects`);
// }
// string.mountain()



// *********************** inheritance ************************************

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
console.log(TASupport);
console.log(Teacher);
console.log(Teacher.__proto__);
console.log(__proto__);


//==================Modern prototype=============================
Object.setPrototypeOf(TeachingSupport,Teacher)
//Sets the prototype of a specified object o to object proto or null. Returns the object o.

let anotherUsername = "shaheer khan      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
    // console.log(`True Length is : ${this.length}`);   
}
anotherUsername.trueLength();  // Calls the custom trueLength method
"shaheer  khan".trueLength();  // This also calls the trueLength method on the literal string "shaheer   khan"

