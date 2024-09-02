// const title= "shaheer khan";
// title="ssddfefe";

// var course ={
//     lecture:10,
//     section:3,
//     title:'Javascript',
//     notes :{
//         introduction : "Welcome to JS Course"
//     },
//     enroll(){
//         console.log('you are successfully enrolled');
//     }
// }
// course.enroll();
// console.log(course.notes);
// console.log(course.section);
// console.log(course);
// course.price=999


// var plan1 = {
//     name  :"Basic",
//     monthly:$399,
//     diskSpace : 100,
//     dataTransfer:1000,
//     sitePages: 10,
// };

// factory function
// function createCourse(title){
//     return{
        // lecture:10,
        // section:3,
//         title:title,
        // notes :{
        //     introduction : "Welcome to JS Course"
        // },
//         enroll(){
//             console.log('you are successfully enrolled');
//         }
        
//     }
    
// }
// var course = createCourse('javaScript');
// course.enroll()
// console.log(course.title);

// Constructor use pascal case
// function createCourse(title){
//     return{
//         lecture:10,
//         section:3,
//         title:title,
//         notes :{
//             introduction : "Welcome to JS Course"
//         },
//         enroll(){
//             console.log('you are successfully enrolled');
//         }
        
//     }
    
// }

// function Course(title){
//     this.title= title,
//     this.enroll = function(){
//         console.log('you are successfully enrolled')
//     }
//     // return this; 
// }
// var course = new Course('javascript');
// course.enroll();
// console.log(course.title)

// delete course.title;
// course.checkEnrollment = function(){
//     console.log('30 users are enrolled');
// }
// console.log(course);



// function createCourse(title){
//     return{
//         lecture:10,
//         section:3,
//         title:title,
//         notes :{
//             introduction : "Welcome to JS Course"
//         },
//         enroll(){
//             console.log('you are successfully enrolled');
//         }
        
//     }
    
// }
// function Course(title){
//     this.title= title,
//     this.enroll = function(){
//         console.log('you are successfully enrolled')
//     }
    // return this; 
// }

// var course = new Course('javascript');  
// console.log(course.constructor)
// console.log(Course.constructor)

// var course = "c++"


// function in constructor
// var Course_1= new Function ('title', `
// this.title= title,
// this.enroll = function(){
//     console.log('you are successfully enrolled')
// }
// `)
// var course_2 = new Course_1('javascript');
// course_2.enroll()

// primitive data type
var number =10;
// pass by value
var number2 = number;
number=15;
// console.log(number);
// console.log(number2);


// reference datatype
var obj1 ={number :10};
// pass by reference
var obj2 = obj1;
obj1.number=14
// console.log(obj1);
// console.log(obj2);

// pass by value with object

var course = {
    title:'javascript',
    enroll(){
        console.log("You are succesfully enrolled");
    }
}
// var course_1 = {...course}
// var course_1 = Object.assign({},course);
// course_1.title="c++";



// for-in loop in object

// for(let key in course ){
//     console.log(key,course[key]);
// }

// for off loop =>> specifically for arrays in objects 
// for(var key of Object.keys(course)){
//     console.log(key,course[key]);    
// }


// var course = {
//     title:'javascript',
//     enroll(){
//         console.log("You are succesfully enrolled");
//     }
// }
// var course_1 ={};
// for(var key of Object.keys(course)){
//     course_1[key]=course[key];
// }





var plan1 = {
    name  :"Basic",
    monthly:$399,
    diskSpace : 100,
    dataTransfer:1000,
    sitePages: 10,
};

function Plan1(name,monthly,diskSpace,dataTransfer,sitePages){
    this.name=name;
    this.monthly=monthly;
    this.diskSpace=diskSpace;
    this.dataTransfer=dataTransfer;
    this.sitePages=sitePages;
}
var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
