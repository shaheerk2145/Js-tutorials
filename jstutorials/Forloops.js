

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);   
// }


// nested
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`inner  loop ${j} of outer loop ${i}`);

//     }    
// }

// for if
for (let i = 0; i < 11; i++) {
    const element = i;
    if(element == "4"){
        // console.log(`aah pakra gya 4 pr`);   
    }
    // console.log(element);
    
}
// array=["jethiya","tappu","iyyer","gogi","sonu","babita","pinku","goli","champak chacha"]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     // console.log(element);
    
    
// }

// for (let index = 1; index < 20; index++) {
//     const element = index;
//     if(element=="5"){
//         console.log(`ab tw daku pakra gya ${element}`);
//         break;
//     }
//     console.log(element);    
// }
for (let index = 1; index < 20; index++) {
    const element = index;
    if(element=="5"){
        console.log(`ab tw daku pakra gya ${element}`);
        continue;
    }
    console.log(element);    
}

// As it is stated in the Error message you have to "fetch first." This worked for me. Use the command:

// git fetch origin master
// Then follow these steps to merge:

// git pull origin master
// git add .
// git commit -m 'your commit message'
// git push origin maste