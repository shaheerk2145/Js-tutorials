//array
const arr =[1,2,3,4,5];
// console.log(arr);

const strArr= ["alex","bhatti","bhagal","ma ","chaddi"]
// console.log(strArr);

const oArr = new Array("k","h","a","n");
// console.log(oArr);


// array methods
// console.log(arr);
// arr.push(9);
// console.log("push :" + [arr])
// let pop = arr.pop();
// let pop2 = arr.pop();
// console.log(pop)
// console.log(pop2)
// arr.shift();
// console.log(arr)
// arr.unshift(10);
// console.log(arr)


// console.log(arr.includes(9))
// console.log(arr.indexOf(2));

// const Array3= arr.join();//convert in string

// console.log(arr)
// console.log(Array3);



//splice slice

console.log("original array: " , arr);

const array_for_slice = arr.slice(1,3);
// console.log(array_for_slice);
// console.log("Sliced array :" , arr);



const array_for_splice = arr.splice(1,3);//removes 3 elementss from 1 index also iits manipuate  with original array
// console.log(array_for_splice);
// console.log("Spliced array: " , arr);


// arr.splice(1, 3):

// 1: The first argument (1) is the starting index. It indicates where to start removing elements from the array.
// 3: The second argument (3) specifies the number of elements to remove starting from the index 1.
// This operation removes 3 elements from the arr starting at index 1 and returns those removed elements as a new array, which is assigned to array_for_splice.


// arr.slice(1, 3):
// 1: The first argument (1) is the starting index. It indicates where to start the extraction.
// 3: The second argument (3) is the ending index (not inclusive). It specifies where to stop the extraction. The element at index 3 will not be included in the new array.
// This operation extracts elements from index 1 up to, but not including, index 3 and returns them as a new array, which is assigned to array_for_slice.








// we can merge multiple arrays using concat as well like spread syntax..

const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
console.log(concatAll)

const allArray = [...Array1,...Array2,...Array3] //spread operator

console.log(Array.isArray("shaheer"))
console.log(Array.from("shaheer"));
console.log(Array.from({name:"shaheer"})) //returns []
// console.log(allArray);
let marks1= 100
let marks2=200
let marks3 =300
// console.log(Array.of(marks1,marks2,marks3));  //Returns a new array from a set of elements.


// 1. push() method in array simply add the array as an new single entity in the existing array.
// 2. concat() method help us achieving a desisered output, like merging the two array, 
// but the problems with concat are, It complicated to concat more then one array simultaneously
//  and also It takes extra space and do the merging operation.
// 3. Despite push and concat we should use spread operator.
// 4. Intresting methods, isArray(), from() and of()
// 5. Array Search Methods:
//      includes(): Checks if an element exists in the array.
//      indexOf(): Returns the index of the first occurrence of a value.
// 6. join(): Converts the array into a string by joining all elements with a specified delimiter.
// Array.isArray(): Checks if the input is an array
// Array.from(): Creates an array from an iterable or array-like object
// Array.of(): Creates a new array from a set of values