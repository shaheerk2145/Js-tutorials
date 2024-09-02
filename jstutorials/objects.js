// sngleton => constructor se singleton obj bnega sirf also jiska aik hi object ho
// object literals
const dec_obj = Symbol("myVal");
const jiska ={
    // "name":"shaheer"   =>sys processit like this
    name:"shaheer", //we write like this
    fullName:"shaheer khan",
    age:23,
    [dec_obj]:"Symbol_value",
    email:"shaheerk2145@gmail.com",
    isLoggedIn:true,
    workingDays:["monday","wednesday","friday"]

}

// obj declaration
console.log(jiska);
// console.log(jiska.email);
// console.log(typeof jiska.email);
// console.log(jiska["fullName"]);
// console.log(jiska[dec_obj]);
// console.log(typeof jiska[dec_obj]);
// console.log(typeof ["fullName"]);

// symbol ko obj ma declare kr k uski value nikalo


// jiska.email="skhan2012@gmail.com";
// Object.freeze(jiska);
// jiska.email="shaheerk2145@gmail.com"
// console.log(jiska);

jiska.greeting = function(){
    console.log("hello keso ho mere dost");
    
};
// jiska.greeting();
// console.log(jiska.greeting()); output= undefined
//  => undefined is 
// bcz  in greeting function we already had  console.log('message') 
// ...but while calling the function you used console.log(greeting()) again. 
// due to to console.log() we are getting an undefined. 
// Just write gretting() and there will be no undefined.


jiska.meeting = function(){
    console.log(`han bey shaney, ${this.name}`); //when you want to reference your own obj u use this.
    
};
// jiska.meeting();




// oject2 
// const user = new object();

const details ={}
details.name="shaheer khan";
details.id=12345;
details.department="IT support";
details.position="Senior";
details.service=true;

// console.log(details);


// optional chaining
const details2={
    name:{
        firstName:"alex",
        lastName:"adams"
    },
    age:20,
    living:{
        place:{
            city:"honolulu",
            district:"honolulu",
            country:"huawaii"
        }
    }
}

// combining objects

// console.log(details2.living.place);
const thing1={1:"a",2:"b"}
const thing2={3:"c",4:"d"}
// const thing3={thing1,thing2}
// const thing3 = Object.assign(thing1,thing2) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// const thing4 = Object.assign({}, thing1,thing2)




// spread operator

const thing3 ={...thing1,...thing2}
console.log(thing3);


//  accessing all keys of object (important)

// const user=[
//     {
//         name:,
//         age:,
//         email:
//     }
//     {
//         name:,
//         age:,
//         email:
//     }
//     {
//         name:,
//         age:,
//         email:
//     }
    
// ]
// user[1].email;
// console.log(details);
console.log(Object.keys(details));
console.log(Object.values(details));
console.log(Object.entries(details));

console.log(details.hasOwnProperty('name'));



// object destructuring
const {position} = details;
// console.log(position);



// JSON API intro