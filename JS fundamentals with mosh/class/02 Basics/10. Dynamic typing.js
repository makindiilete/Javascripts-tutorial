/*One thing that separates JS from other programming languages is that js is a dynamic language. The dynamic means the type of a variable can change at runtime e.g. if a variable is set to "string", this variable can be changed to number.

We the "typeof" operator, we can check the type of a variable
*/

let name = "Mosh"; //String literal
let age = 30; // Number literal
let isApproved = false; //Boolean literal
let firstName = undefined;
let lastName = null;

/*
Though the variable "name" is a string, we confirmed this with the "typeof" operator" and later we change the value to a number and confirmed the type again and it changed to number. This is the "Dynamic Typing" in action

RESULT : -

typeof name
"string"

name = 1
1

typeof name
"number"
*/

/*We can check the type for all our variables

age
30
typeof age
"number"

age = 30.1
30.1
typeof age
"number"

isApproved
false
typeof isApproved
"boolean"

firstName
undefined
typeof firstName
"undefined"

lastName
null
typeof lastName
"object"

Here we see that though we change the value of age from whole number to floating number, the type remains "number". This is to show we only have one type of number in js unlike other languages.
*/
