var num1 = 25
var num2 = 38
var num3 = 8
// num1= 23
var result = num1-- + num1++ + num1++ - --num1 - --num1 - num1-- + num1
//           25     +  24     +  25    -    25  -  24    -  24    + 23
//                     74              - 25      -24    -24      + 23
//                       97      - 73
//                             24 
console.log(result)
// num2=39
var result = ++num2 + ++num2 - --num2 - num2 + num2
//           39     +  40    -  39    -39    +39
//           39     +       1         -39    +39
//           39     +        (-38 )          +39
//           39     -         38             +39
//                  1                        +39
//                           40
console.log(result)
// num3 =8
var result = num3 + num3 + ++num3 + --num3 - --num3 + ++num3 + --num3 - num3
//               8    +  8  +   9    +  8    -  7      +  8     +     7   -7 
//                         33               - 7            +15         - 7
//                                      48           -        14
//                                              34
console.log(result)