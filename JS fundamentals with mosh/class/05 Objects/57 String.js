/*A string we have learnt about that they are primitive and not object which are reference object. How come they also have methods? This is because internally when we call the string variable with the dot notation, it turns the string into a string object. You can also check this out on mozilla.org*/

const message = "This is my first message";
console.log(message.length); //This returns total characters in a string, useful for input fields if we dont want the user to type up to certain  number of characters.
console.log(message[0]); //accessing a character a given index
console.log(message.includes("my")); //check if the string contains "my"
console.log(message.startsWith("This")); //checks if the string starts with 'this'
console.log(message.endsWith("e")); //checks if the string ends with 'e'
console.log(message.indexOf("my")); //return the index of the word "my"
console.log(message.replace("first", "second")); //replace the word "first" with "second" and return a new string without modifying the original one
console.log(message.toUpperCase()); //Return a new string where all characters are uppercase
console.log(message.toLowerCase()); //Return a new string where all characters are lowercase
console.log(message.trim()); //This removes all the spaces before and after our string
console.log(message.trimLeft()); //This removes all the spaces at the start of the string
console.log(message.trimRight()); //This removes all the spaces at the end of the string

/*RESULTS : -
24
T
true
true
true
8
This is my second message
THIS IS MY FIRST MESSAGE
this is my first message
This is my first message
This is my first message
This is my first message
*/

//ESCAPE NOTATION : By default, javascript will not allow us format our string with some printable characters like single quote ', double quote ", new line etc because it will confuse the engine e .g
const message  = "This is my first" letter";
    const message = "This is my first\" letter"; //here we solve the problem using the '\" escape notation.... All other escape notation can be found on mozilla website
console.log(message);
//RESULT : - This is my first" letter

const message = "This is my first\n letter";
console.log(message);
//RESULT : -
/*
This is my first
 letter
 */

const message = "This is my first letter";
console.log(message.split(" ")); //This use the space to split each words into an array

/*RESULT : - [ 'This', 'is', 'my', 'first', 'letter' ] */
