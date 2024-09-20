// promise =>object representing  eventual completion(or failure) of an asynchronous operations and its resulting valueObject.entries(

//two parts of promise
// 1.create promise
// 2.consume promise

// promise create
const promiseOne = new Promise(function(resolve, reject){
    //async
    //db calls
    setTimeout(function(){
        console.log("mam mera hindi grammar ka kaam ha");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("async 1 called");
})
new Promise(function(resolve, reject){
    //async
    //db calls
    setTimeout(function(){
        console.log("ae mamri tu pagal ha pagal");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 called");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("beta tamiz nhi ha aapko mam se say baat krtey hen ky")
        resolve({name:"shaheer khan",email:"shaheerk2145@gmail.com"})   //object,array or function kuch bhi call krsktey resolve me
    },2000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false;
        if(!error){
            resolve({
                name:"MP sir",
                fullName:"Mani Paal Sir",
                id:123
            })
        }else{
            reject("Error! 404 Not Found");
        }
    },2000)
})
promise4.then((user)=>{
    console.log(user);
    return user.fullName
})                              //[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block,
//  or by rejecting a promise which was not handled with .catch(). 
.then((fullName)=>{
    console.log(fullName);
    
}).catch((error)=>{
    console.log("BIG BIG ERROR");
    
}).finally((error)=>{
    console.log("either resolved or rejected");
})

const promiseFive= new Promise(function(resolve,reject){
    let error= false;
    if(!error){
        resolve({
            course:"Java",
            creditHour:"2+1",
            code:123
        })
    }else{
        reject("Error! 404 Not Found")
    }
})

//async await
async function ConsumePromise() {
    //use try catch is must otherwise error
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error)
    }

}
ConsumePromise();

async function getData(){
    try{
        const link = await fetch('https://api.github.com/users/shaheerk2145');
        const data = await  link.json() //string into json
        console.log(data);
        // ReferenceError:Promise { <pending> }  if we didnot write await with response.json
        
    }
    catch(error){
        console.log("Error : ",error);
    }
}
getData();


fetch('https://api.github.com/users/shaheerk2145')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
    
})