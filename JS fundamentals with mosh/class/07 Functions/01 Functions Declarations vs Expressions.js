/*We have a little about function in javascript but in this section we will examine functions in more details*/

//Function Declaration :  A function declaration is when we declare a function explicitly, in this case we dont need the semi-colon to terminate it.
// Adding a semi-colon to a function declaration will not return an error but by convention/best practice, we dont do this.

function walk() {
  console.log("walk");
}

//Function Expression : - A function expression is when we set the value of a variable to a function and we terminates it with the semi colon ;
//Just as we can set the value of a variable to number, boolean, strings etc, they can also be set to a function as reference type and we know a function is an object

let run = function() {};

//WE HAVE TWO TYPES OF FUNCTION EXPRESSION : NAMED FUNCTION EXPRESSION AND ANONYMOUS FUNCTION EXPRESSION
//Named Function Expression : - This simply has a name
let run = function run() {};

//Anonymous Function Expression : - This does not has a name.
let run = function() {};

//CALLING THE FUNCTIONS
let run = function() {
  console.log("run");
};
//Calling the anonymous function with the name of the variable
run();

//We can declare another variable and set it to our "run" variable
let run = function() {
  console.log("run");
};
let move = run;
run();
move();
//RESULT : - run run
