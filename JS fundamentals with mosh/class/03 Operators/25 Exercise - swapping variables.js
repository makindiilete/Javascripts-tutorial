let a = "red";
let b = "blue";

console.log(a);
console.log(b);

//RESULT
// red
// blue

// QUESTION : - Swap the value of a for b and b for a so that in the console we get : -

/*
blue
red
*/

//ANSWERS : - To be able to swap this two values, we need another variable, we can call that "c" and we will copy the value of "a" into "c" and the copy the value of b into a then we at that point both a and b are having same value of "blue" now we copy the value of "c" which already holds the previous value of a "red" into b

let a = "red";
let b = "blue";
let c = a;

a = b;
b = c;

console.log(a);
console.log(b);

/*RESULT : -
blue
red
*/
