/*In the category of reference types, we have learnt about objects and arrays, now let us take a look at functions. Functions is one of the fundamentals building blocks in javascript.

A function is basically a set of statement that "performs a task "or "calculates a value"*/

//Basic function

function greet() {
  //the function body where our logic are displayed
  console.log("Hello Mosh");
}
//calling the function
greet();

//RESULT : - "Hello Mosh"

/*Looking at the function, it looks dummy, we should be able to allow the user enter their name and we greet them instead of the hardcoded "mosh" here*/

//here we place a variable btw the brackets ()..
//This variable is referred to as "Parameter"
function greet(name) {
  //we concatenate the greeting string and the name
  console.log("Hello " + name);
}
//when calling the function, we need to pass a value for the name variable/parameter.
//We refer to this value as "argument"
greet("Michaelz");

//So "Michaelz" is an argument to the greet function
//"name" is a parameter of the greet function

/*RESULT : -
 Hello Michaelz
 */

//FUNCTIONS WITH MULTIPLE PARAMETERS

//Multiple parameters
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
//Multiple arguments
greet("Michaelz", "Akindiilete");

//RESULTS : -
// Hello Michaelz Akindiilete
