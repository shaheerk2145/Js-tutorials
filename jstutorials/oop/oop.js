const details = {
    name:" shaheer ",
    loginCount:9,
    signedIn:true,
    getDetailsOfUser: function(){
        // console.log("Got user details from database");
        // console.log(this.signedIn);
        // console.log(`name: ${name}`);     
        console.log(this);
        
    }
}

console.log(details.name)
console.log(details.getDetailsOfUser());
console.log(this);  //{}
//in browser if you run console.log(this) it will gives you many options but not in node
// new =>naya context bnaney k kaam ata ha
//new => new object created 
//       constructor function called(pack all argumenst in it)
//       all arguments pack 'this' keyword
//       function k andr miljatey


// constructor property =>khud hi k baarey ma refernce

function user(userName,userID,isloggedIn){
    this.userName=userName,
    this.userID=userID,
    this.isloggedIn=isloggedIn
    // return //not working
    this.greeting =function(){
        console.log(`Welcome My boy ${userName}`);
        
    }
    return this
}
const user1 = new user("shaheer",2145,true);
const user2 = new user("khan",2010,false);    //user2 values overwrite user 1 values
console.log(user1.constructor)   //The initial value of Object.prototype.constructor is the standard built-in Object constructor.
console.log(user1 instanceof user)   //true 

// let number =0
// console.log(number++); //(0)+1
// console.log(++number);  //2
// console.log(number);    // 2



