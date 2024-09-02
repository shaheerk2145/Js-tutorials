
// =====through callback function
// const oldArr= ["shariq","haris","hashim","aimal"];
// console.log(oldArr[0])
// console.log(oldArr[1])
// console.log(oldArr[2])
// console.log(oldArr[3])

// const newArr = oldArr.map(function(arrVal,i,arr){
//     return  i + ":" + arrVal + " khan";
//     // console.log(arr);
// });
// console.log(newArr);
// console.log(oldArr);


// ===== through arrow function
const studentData = [
    {
        id:1,name:"shariq" , degree:"BS Civil"
    },
    {
        id:2,name:"haris" , degree:"MBBS"
    },
    {
        id:3,name:"hashim" , degree:"BS Civil"
    },
    {
        id:4,name:"naveed" , degree:"MCS"
    },

];

// console.log(studentData[0].name)
const newData = studentData.map((cvalue)=>{
    return `my name is ${cvalue.name} and i have a ${cvalue.degree} degree `;
});
console.log(newData);

document.getElementById("paragraph").innerHTML=newData;