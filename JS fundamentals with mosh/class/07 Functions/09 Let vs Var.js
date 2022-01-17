/*So far we have been declaring variables with the "let" keyword but we mentioned earlier in the course that we can also declare variables using the "var" keyword..

We will learn about the problems with "var" and why it should be avoided.
*/

// 1) "var" keyword makes variables that are supposed to be blocked scope accessible everywhere in a function

function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    //  i is only accessible inside this code block when they are inside the {}
  }

  console.log(i);
}
start();

/*RESULT
//For the first log msg inside the loop block
0
1
2
3
4

//For the second log statement outside the loop block, we get error
Uncaught ReferenceError: i is not defined

The same scenario happens even if the function is like ds below without the {}
*/

function start() {
  for (let i = 0; i < 5; i++) console.log(i);

  console.log(i);
}
start(); //We still get same result bcos here even though we do not have the {} for code block, we are calling a log statement after one has been terminated.

//PROBLEM WITH "VAR"

function start() {
  for (var i = 0; i < 5; i++) console.log(i);

  console.log(i);
}
start();

/*RESULT : -
0
1
2
3
4
5

Funny enough when we change "let" to "var" our error is gone....This is the problem with the var keyword...When you declare a variable with var, its scope is not limited to its code block but limited to the function in which it is defined.


// var => function-scoped
//ES6 (ES 2015) : let, const => block-scoped
*/

function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = "red";
      //    with "let" or "const" color will only be accessible here but now dt we used "var", we can access "color" anywhere in this function
    }
  }

  console.log(color);
}
start(); //RESULT = red

// 2) The second problem with the "var" keyword is with global variable

//When we create a global var with the "var" keyword, this creates a variable attached to the window object in browser...The window is an object with complex properties and methods in the browser, useful for building front-end app...So bcos of the attachment to the window object we can access variables with "window.color"
var color = "red";
console.log(window.color); //RESULT : red

//In contrast, a variable with the "let" or "const" are not attached to the window object
let age = 30;
console.log(window.age); //RESULT : undefined

/*WHY IS IT BAD TO ATTACH A VARIABLE TO THE WINDOW ()? Window object is something central with only one instance of the object and if you are using a 3rd party library and the library also has a variable with the same name, the variable of the library can override your variable...So YOU SHOULD AVOID ADDING STUFFS TO YOUR WINDOW OBJECT IN OTHER NOT TO CREATE ISSUES IN YOUR PROGRAMS.

 All functions are global functions and can be accessible from the window object and this is also bad practice.. A way to avoid this is to add each function into modules so they are not accessible in the window object..This will be learnt later in the course
  */

function sayHi() {
  console.log("hi");
}

console.log(window.sayHi()); //RESULT : hi

/*AVOID USING THE "var" keyword because it creates variables that are function scoped and not block scoped*/
