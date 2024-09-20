function number(num){
    return num *5;
}

number.power=5
console.log(number(5));
console.log(number.power);
// console.log(number.prototype);

//prototype not only give methods but also some properties 
//similarly this function above has also some properties (if any ) like this.num =num; etc
// so this this. property and/or any prototype property will be saved in the {} which is give in output of 
// console.log(number.prototype);

// object and new oprater features 


function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Explicitly returning a primitive value
    return "This is a string";
}

const person2 = new Person("Bob", 30);

console.log(person2);  // Output: { name: "Bob", age: 30 }

console.log(scoreCard.prototype)              //{increment: [Function (anonymous)],printCard: [Function (anonymous)]}
    

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. If no explicit return value is specified 
from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called,
if it doesn't return a non-primitive value (object, array, function, etc.),
 the newly created object is returned.

*/





/* function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Explicitly returning a different object
    // return { job: "Engineer" };
}

const person1 = new Person("Alice", 25);

console.log(person1);  // Output: { job: "Engineer" }



function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Explicitly returning a primitive value
    return "This is a string";
}

const person2 = new Person("Bob", 30);

console.log(person2);  // Output: { name: "Bob", age: 30 }




If the constructor explicitly returns an object, that object is returned, 
and the newly created object is discarded.
If the constructor returns a primitive (string, number, boolean, etc.), 
the newly created object is returned as usual, ignoring the primitive return.
*/
