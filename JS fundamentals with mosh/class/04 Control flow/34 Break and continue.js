/*With all the loops we have learnt so far, there are two keywords "Break & Continue" that can change how the loop behaves. We will examine this with the while loop but these is the same for all loops.*/

//A normal while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

/*RESULT : -
0
1
2
3
4
5
6
7
8
9
10

Sometimes you may want to jump out of a loop for some reason that may happen at runtime
*/

let i = 0;
while (i <= 10) {
  //  when the value of "i" is 5, we jump out of the loop
  if (i === 5) break;
  console.log(i);
  i++;
}

/*RESULT : -
0
1
2
3
4
Next value will be 5 so we jump out of the loop
*/

//CONTINUE
let i = 0;
while (i <= 10) {
  //  whenever "i" is an even number, we exclude dt number and continue the loop. This gives us the odd numbers
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

/*RESULT: -
1
3
5
7
9
*/

/*The "continue" is not something you will be using often, its just one of the old legacy keyword...
RECAP : - With the "Break" keyword, we jump out of a loop, while with the "Continue" keyword, we jump to the next iteration*/
