/*In this self exercise, we want to check if a string is a palligium i.e. if the string return the same word when we reserve it like "Ada"..
It returns "true" if both original and reverse are the same else, it returns false.
*/

//The string input entered by user
const name = "mayowa";

//Converting the string to an array with split() method
const splitted = name.split("");
console.log(splitted);
//Joining the array back to a string
const splittedJoin = splitted.join("");
console.log(splittedJoin);

//Reversing the splitted array
const reverse = splitted.reverse();
console.log(reverse);
//Joining the reversed array to get same string from 8 in reverse order
const reverseJoin = reverse.join("");
console.log(reverseJoin);

//Checking if the original string and reversed string are equal
const check = splittedJoin === reverseJoin;
console.log(check);

/*RESULT : -
[ 'm', 'a', 'y', 'o', 'w', 'a' ]
mayowa
[ 'a', 'w', 'o', 'y', 'a', 'm' ]
awoyam
false
*/
