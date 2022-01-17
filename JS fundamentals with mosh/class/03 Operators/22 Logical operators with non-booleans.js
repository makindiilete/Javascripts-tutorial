/*So far we have been using the logical operators with boolean values but in JS, we can use it with non-boolean values which can be extremely powerful*/
/*When using logical operators with non-booleans, the result is not always booleans.... Let us examine cases below

false || true
true

false || 'Mosh'
"Mosh"

false || 1
1

You can see that cases where we compare logical operators with non-booleans, it returned the non-boolean values and didnt return true or false, when we compare logical operators with non-booleans like this, it returns what we call FALSY || TRUTHY....These are not "false || true"
*/

//FALSY
/*
 * undefined
 * null
 * 0
 * false
 * ''
 * NaN*/

// Anything that is not Falsy -> Truthy

//Let us examine the case below
/*
false || 1 || 2

1

We might expect to get 2 but here we got 1. This is another thing we need to be aware of about the logical operator, we can have millions of values but immediately we have a value, that value is instantly returned and other data are ignored... This is what we call "Short-circuiting"*/

//REAL CASE SCENARIO
//Here is the color user picked
let userColor = "red";
//Here is the default color
let defaultColor = "blue";
//if the user set a color, we use it, else we use the default color
let currentColor = userColor || defaultColor;

console.log(currentColor);

//RESULT : - "red"

//Let us examine if user does not set any color
//User did not set a color
let userColor = undefined;
//Here is the default color
let defaultColor = "blue";
//if the user set a color, we use it, else we use the default color
let currentColor = userColor || defaultColor;

console.log(currentColor);

//RESULT : - "blue"

/*This is the advantage of using the logical operator with non boolean values, with it we can see default values.*/
