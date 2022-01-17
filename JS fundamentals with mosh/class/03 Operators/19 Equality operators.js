/*We learnt about the equality operator "===" in the last lecture which is a combo of 3 equals sign and this compares if the value of a variable is equal to something else.

We also have another type with just two equal sign "==".*/

// Strict Equality : - This returns true only if both sides have the same "type" and "value"
console.log(1 === 1); //this will return "true"
console.log("1" === 1); //this will return "false" cos we comparing string with number

//Lose equality : - This doesnt care about the type matching, it will convert the left side to match what we have on the right side and then it will only check if their values are equal.

console.log(1 == 1); //this returns true bcos type and value matched
console.log("1" == 1); //type doesnt match so right side got converted to "1" and now their values matched and returns "true"
console.log(true == 1); //type mismatched so right side got converted technically to "true" so values matched and returns "true"

/*Most of the time, you should be using "===" because its more accurate and keep you from bugs*/
