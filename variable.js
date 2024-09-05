const accountId= 1234567 // once declared u cant change it
let accountEmail="shaheerk@gmail.com"// its value can be changed 
var accountPassword= "mathewmuzz"  //changable irresppective of scope  
accountCity="Cairo" // not good way but variable can also be declared in this way
let accountState; // u cant left variable only declared


accountEmail="skhan123@gmail.com"
accountPassword="machlann123"
// accountId = 098765     //once const is declared its value cannot be changed


console.log("accountId : " + accountId);
console.log("accountEmail : " + accountEmail);
console.log("accountPassword: " + accountPassword);
console.log("accountCity: " + accountCity);
console.table([accountId ,accountEmail,accountPassword,accountCity ,accountState]);  //declared in tabular structure

/*prefer not to use var bcz
of issue in block or functional scope
 */