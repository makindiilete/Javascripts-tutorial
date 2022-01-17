/*Earlier in the course we learnt that js is a dynamic language because we can see the value of a variable to a type and later change its type to another and this is absolutely fine.

We have this same dynamic in the arguments of a function.
*/

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); //RESULT = 3

/*Here we have a function with 2 parameters "a & b" but when calling this function, we might choose to pass just one parameter and this will still run without error and we can choose not to pass any parameter at all.*/

function sum(a, b) {
  return a + b; // 1 + undefined = NaN
}
console.log(sum(1)); //RESULT = NaN

/*By this same token, we can pass more than the required arguments and it will still work just that only the required arguments will be used*/

function sum(a, b) {
  return a + b; //only 1 & 2 will be used
}
console.log(sum(1, 2, 3, 4, 5)); //RESULT = 3

/*We might want to be able to pass as many arguments as we want and still get the result.

Every function in Javascript has an object called "Arguments"....We can check this object in the console
*/

function sum(a, b) {
  //  checking the hidden arguments object in the function
  console.log(arguments);
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5));

/* RESULT : - [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
OR

Arguments(5)0: 11: 22: 33: 44: 5callee: ƒ sum(a, b)length: 5Symbol(Symbol.iterator): ƒ values()arguments: (...)caller: (...)length: 0name: "values"__proto__: ƒ ()[[Scopes]]: Scopes[0]__proto__: Object

In chrome console...

This appear like an array but it is not an array but an object

The keys we have in this objects are the index of the arguments we passed to this function.

In this object we have the "length" which is the total number of arguments passed "5"
We also have the "callee" which returns the currently executed function "f sum(a, b)

To work with all the arguments passed and as many as possible, we can use the "For...Of" loop in this case...

Though we earlier said "For...Of" loop is to be use only on array and not objects but we can use it on this particular "arguments{}" object because of the "Symbol.iterator" properties it has which makes it iterable....
 */

function sum(a, b) {
  //  We set a variable and initialise it to 0
  let total = 0;
  // the loop through all the arguments we supplied to the arguments object and we add each one to our "total"
  for (let value of arguments) total += value;
  //we then return it
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); //RESULT : - 15

//MODIFICATION

// We can simplify this code and get rid of the parameters since we are not really using them but the values of the argument object
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5));
