/*Finding elements in an array really depends on if we are storing primitive or reference types in an array.... We will start with primitive and then show how to find reference type in an array.*/

//Example 1
const numbers = [1, 2, 3, 4];

//"indexof" return the index of the passed arguments in the array....IF the elements supplied does not exsit in the array, we get -1
const find = numbers.indexOf("a");

console.log(find); //RESULT = -1

//Example 2
const numbers = [1, 2, 3, 4];

//"indexof" return the index of the passed arguments in the array....IF the elements supplied does not exist in the array, we get -1
const find = numbers.indexOf(1);

console.log(find); //Here we get 0 because the index of 1 in the array is 0

//Example 3
const numbers = [1, 2, 3, 1, 4];

//"lastIndexOf" works when we have multiple same elements in an array e.g.[1,2,3,1,1]..."lastIndexOf" 1 will return the index of the last occurrence of 1 in the array..If the element does not exist, it returns one...If there is only one occurrence of the element, it returns the index of that element just like "indexOf"
const find = numbers.lastIndexOf(1);

console.log(find); //3

//Example 4
const numbers = [1, 2, 3, 1, 4];

//Since if element does not exist in an array, we get -1, we can check if an element exist in an array using this method below.
console.log(numbers.indexOf(1) !== -1); //This return true bcos 1 is in the array and its index cannot be -1

//Example 5
const numbers = [1, 2, 3, 1, 4];

//A better way in ES6 is below
console.log(numbers.includes(1)); //This return true bcos the array includes 1

//OPTIONAL PARAMETER

/*All these methods we have used so far has an optional parameter which is the starting index i.e. The index at which the start will begin instead of the default which is starting from 0*/
const numbers = [1, 2, 3, 1, 4];

//Return the index of element 1 from the array but start the search from index 2
console.log(numbers.indexOf(1, 2)); //This returns 3 because the search starts from index 2 which means the search start from number 3 to the right to search for 1...If we did not include this optional parameter, the index of number 1 would have return 0 because the search will start with the first item in the array to look for number 1
