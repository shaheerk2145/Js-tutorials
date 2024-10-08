//Foreach
const lang = ["cpp","py","rb","js","java","xml"];
// lang.forEach((item) => {
//     console.log(item);
// });
const values = lang.forEach((item) => {
    // console.log(item);
    // return item //undefined
});
// console.log(values); //undefined

//Filter

const digits=[1,2,3,4,5,6,7,8,9,10];
// const reult = digits.filter((num)=>{
//     // console.log(num);
//     // return num > 4;
// });
// console.log(result)
const count=[];
digits.forEach((num)=>{
    if(num>4){
        // console.log(num);
        // count.push(num);
    }
})
// console.log(count);


// const reults = digits.filter((num)=>(num<7));
// console.log(reults);


// if we want single line code in callback function we will simply close the code with braces only
// but if we want multiline comment then we need to write code body in paranthesis and also we need to write return at the end


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// let myBook = books.filter((kitab)=> kitab.publish === 2011);
// let myBook=books.filter((kitab)=>{
//     return kitab.genre === 'Science' && kitab.publish<=2000;
// })
// console.log(myBook);


// map
const figures = [10.2,11.3,4.3,4.8,7.5,3.1,10.0,9,5];
// const tFigures = figures.map((num)=>num + 10);
// chaining
// const tFigures = figures
//         .map((num)=>{ return num *5})
//         .map((num)=>{ return num -1})
//         .filter((num)=>{ return num >= 25})
// console.log(tFigures);




// reduce======================================================================

const runs =[11,17,3,12,19,41,32,27,9,13,12]
const total = runs.reduce(function(accumulator,currentValue){
    // console.log(`player number  scores ${currentValue}`);
    return accumulator + currentValue;
},0);
// console.log(total);
const myTotal = runs.reduce( (acc, curr) => acc+curr, 0);
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course ",
        price: 2999
    },
    {
        itemName: " py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course ",
        price: 12999
    },
]
const pesayDena = shoppingCart.reduce((acc,currVal)=>{ 
    console.log(`course ${currVal.itemName} price is ${currVal.price}`);
    return acc+ currVal.price 
},0);
console.log(`Total Price : ${pesayDena}`);


