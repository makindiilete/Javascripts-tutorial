/*Do..While loop is a little bit similar to while loop but they are slightly different*/

//do....while
let i = 0;
//perform "do" the statement in the {}
do {
  //no condition to be check first here so ds statement is executed irrespective of anything
  if (i % 2 !== 0) console.log(i);
  i++;
  //  while this condition is true : - here we now check for condition and if its falsy, the loop terminates
} while (i <= 5);

/*Difference between "While" and "Do...While" Loop
A Do...While loop is always executed atleast once even if the condition is falsy because the condition is always evaluated at the end of the code unlike "While" loop where the condition is first checked before the statements get executed

Realistically you will not use "Do....While" alot in programming, Do...While has its usefulness but most of the time you will be using the "For" or the "While" Loop.
*/
