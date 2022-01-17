/*We use variable to store data temporarily in a computer memory*/

//declaring a variable

let name;
console.log(name);
/*his returns "undefined" in the console because the variable "name" does not have a value*/

let name = "Mosh";
console.log(name);
//RESULT : - "Mosh"

/*RULES FOR DECLARING A VARIABLE
1. Cannot be a reserved keyword
2. The variable name should be meaningful and describe the data it is storing
3. They cannot start with a number.
4. They cannot contain a space or hyphen
5. They are case-sensitive*/

//You can declare multiple variables on the same line
let firstName, lastName;

//But the modern way is to declare each variable on a separate line
let firstName = "Mosh";
let lastName = "Hamedani";
