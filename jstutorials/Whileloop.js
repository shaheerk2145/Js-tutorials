// while loop syntax
// while (condition) {
//     // code body
// }

let students =1;
while (students < 20) {
    // console.log(`student number ${students}`);
    students=students+1;
}

let loArray = ["hurricanes","strikers","renegades","heats","scothers","stars","thunders","sixers"];
let count=0;
while (count  <  loArray.length) {
    // console.log(`teams in the tournament are ${loArray[count]}`);
    count = count+1;
    // break;
}
let score =[11,21,35,7,4,22,54,31,11,12,3];
let runs= 0
let total=0

do {
    console.log(`player number ${runs}  score ${score[runs]}`);
    
    total += score[runs];
    runs =runs +1;
    // console.log(`total score :${total}`);
} while (runs<score.length);
console.log(`total score :${total}`);

 