/*We learnt about function declaration and function expression...The key difference between this two is : -

1) We can call the Function Declaration before it is defined but we cannot a function expression before it is define because a function expression is a value of a variable so the variable needs to be declared first and calling it before declaring the variable will lead to "function not defined" error.
*/

//Here we can call the "f()" function before declaring it because at run time, the javascript engine will move our function code block to the top of the function call AND THIS PROCESS IS WHAT WE CALL HOISTING.

walk();
function walk() {
  console.log("walk");
}

//If we try to call the "run()" function before declaring it, we get error in console

run();
let run = function() {
  console.log("run");
};

//HOISTING : - This is the process of moving a function declaration to the top of the file and this is done automatically by the javascript engine that is executing this code.
