/*We want to talk about an important concept called SCOPE

Here we log a msg to the console and definitely we know what the result will be but scoping will take effect if we put the variable inside {}
*/

// LOCAL SCOPE ; - This are const or variable that can only be accessible inside their code block...Examples below

//EXAMPLE 1

const message = "hi";
console.log(message);

///EXAMPLE 2 : SCOPING
{
  const message = "hi";
}
console.log(message); //ReferenceError: message is not defined

/*The scope of a variable or constant determines where that variable will be accessible.....
When we define variable or constant with "Let" or "Const", their scope is limited to the block in which they are defined.....

const message = "hi";
console.log(message);

So "message" is accessible in this block but not outside the block.
Incase you are wondering why do we need block for this in the first place, the block might be a function or an IF block*/

//EXAMPLE 3

function start() {
  const message = "hi";
  // message can only be accessible here
  if (true) {
    const another = "bye";
    //  "another" can only be accessible here
  }
  console.log(another);
  for (let i = 0; i < 5; i++) {
    //    "i" can only be accessible here
  }
  console.log(i);
}

console.log(message); //ALL LOG MSGS WILL RETURN ERROR BCOS THEY ARE OUTSIDE THE VARIABLE BLOCK

/*We can have two different functions with the same variable name like below and this will still be a valid javascript code because they belong to different scope inside different block*/

function start() {
  const message = "hi";
}

function stop() {
  const message = "bye";
}

/*GLOBAL SCOPE : - This are constants or variables that are accessible everywhere, the do not have any code block...They can be accessible even from a local scope*/

const color = "red";

const color = "red";

function start() {
  const message = "hi";
  //Accessing the "color" global scope from local scope
  console.log(color);
}

function stop() {
  const message = "bye";
}

start(); //Result : - Red

/*Local variables or constants in a function takes precedence over global variables i.e. A variable declared inside a function block (local) will override another variable declared with the same name outside the function.*/

const color = "red";

////////////////////////////////////////////////////////////////////////
function start() {
  const message = "hi";
  //local variable taking precedence over global variable
  const color = "blue";
  console.log(color);
}

function stop() {
  const message = "bye";
}

start(); //Result : - Red

/*In general you should avoid defining global variables or constants..That is considered a bad practice bcos they are accessible everywhere and functions can accidentally change their values and this will lead to bugs and issues in our programmes.*/
