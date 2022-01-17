/*Create a function called "countOccurences", the function takes an array and a search element and return the number of times the elements has occurred in this array.
If the number passed does not exist, we get zero
*/

//MY SOLUTION
const numbers = [1, 2, 3, 4, 1, 1];
const count = countOccurences(numbers, 1);
console.log(count);

function countOccurences(array, searchElement) {
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}

//RESULT = 3 because 1 is the search Element and it occured 3 times

//TESTING WITH VALUE THAT DOES NOT EXIST....
const numbers = [1, 2, 3, 4, 1, 1];
const count = countOccurences(numbers, 5);
console.log(count);

function countOccurences(array, searchElement) {
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}

//RESULT : - We pass 5 to search for how many times 5 exist in the array and we get 0 because 5 is not an array element.

//WE WANT TO SOLVE THE SAME PROBLEM WITH REDUCE METHOD BECAUSE AS WE CAN SEE, WE ARE SIMPLY REDUCING THE ARRAY TO A NUMBER

const numbers = [1, 2, 3, 4];
const count = countOccurences(numbers, 5);
console.log(count);

function countOccurences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) accumulator++;
    return accumulator;
  }, 0);
}
