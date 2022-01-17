/*In javascript we have two type of TYPES:-
 * Value or Primitive Types: -
 * * Number
 * * String
 * * Boolean
 * * Symbol
 * * Undefined
 * * Null
 * Reference Types: -
 * * Object
 * * Function
 * * Array

We learnt that functions are also objects. This is also true for arrays. Arrays are also objects so we can say we have PRIMITIVE/VALUE TYPES & OBJECT.
We will examine how they behave differently*/

//primitive behavior
//here we have a var x which takes value of 10
let x = 10;
//here we assign x to variable y which means y is now equals to the value of x (10)
let y = x;
//here the value of x has changed from 10 to 20 but the value of y remains "10"
x = 20;

/*We can verify this in the console
x
20
y
10

Here we can see that variable y retains the value that was given to it "10", this is to tell you that EACH OF THE VARIABLES ARE INDEPENDENT OF EACH OTHER, ONLY THEIR VALUES ARE COPIED.
*/

//reference behavior
//here we have a var x which takes an object
let x = { value: 10 };
//here we assign x to variable y which means y is now equals to the value of x {value:10}
let y = x;
//here the value of x has changed from 10 to 20
x.value = 20;

/*We can verify this in the console
x
{value: 20}
y
{value: 20}

Here we can that variable y takes the changed value of x. This is because in reference type or object, the object we assign to variables are not stored in that variable, they are stored separately on an address and when we assign another variable to that first variable, we are simply connecting that variable (y) to the address where the value of variable (x) is stored and this is why any change affects all the variables.
*/

/*PRIMITIVE ARE COPIED BY THEIR VALUE && OBJECTS ARE COPIED BY THEIR REFERENCE*/

// Another primitive sample
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number);

/*In the console we get '10' but we did increment "number" so how come we get 10? We get 10 because this is a primitive type and the "number" we log in the console is independent of the incremented "number++" inside the function*/

// Another reference sample
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
/*In the console, we get "11". This is because the variable "obj" is not a reference and its value is stored at an address where our function property points to also*/
