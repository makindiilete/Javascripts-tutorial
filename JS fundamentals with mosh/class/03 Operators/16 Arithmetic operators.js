/*We use this to perform mathematical calculations*/

let x = 10;
let y = 3;

//Addition/Arithmetic operator
// x & y are called "operands"
// "x + y" is a javascript expression. (An expression is something that produces a value)
console.log(x + y);
//Subtraction operator
console.log(x - y);
//Multiplication operator
console.log(x * y);
//Division operator
console.log(x / y);
//Remainder of division
console.log(x % y);
//Exponential (x raised to power of y)
console.log(x ** y);

/*We have two new arithmetic operators that are little bit tricky*/

//INCREMENT OPERATOR I
let x = 10;
let y = 3;

//Increment (++) : Ds operator will behave differently depending on where we place the "++"

//Placing it before the variable, it will add one to the variable and log the result to the console
console.log(++x);

//RESULT : - 11

//INCREMENT OPERATOR II
let x = 10;
let y = 3;

//Increment (++) : Ds operator will behave differently depending on where we place the "++"

//Placing it after the variable, it will add one but the result will be logged when we re-call the variable the second time
console.log(x++);
//we re-calling variable x so the result will not be logged
console.log(x);

/*RESULT : -
10
11
*/

//DECREMENT OPERATOR I

let x = 10;
let y = 3;

//Decrement (--)

//Placing it after the variable, it will minus one but the result will be logged when we re-call the variable the second time
console.log(x--);
//we re-calling variable x so the result will not be logged
console.log(x);

/*RESULTS: -
10
9
*/

//DECREMENT OPERATOR II
let x = 10;
let y = 3;

//Decrement (--)

//Placing it before the variable, it will minus one from x and log the result to the console
console.log(--x);

//RESULT : - 9
