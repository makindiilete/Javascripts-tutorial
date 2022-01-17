/*With the "includes()" method we can search an array to see if an element exist....Let us image this method does not exist...Implement this using a function*/

//My solution did not work because we are not suppose to use any library but I ended up using indexOf() which is a library...Using a for loop will be better

//MY SOLUTION
const numbers = [1, 2, 3, 4];
const find = includes(numbers, 4);
console.log(find); //RESULT : - true

function includes(array, searchElement) {
  // Since we use "indexOf()" method to check if an element exist in an array and for elements that does not exist, we get -1...We easily check if the array supplied returns -1 for the searchElement...
  if (array.indexOf(searchElement) === -1) return false;
  else return true;
}

//WEB-STORM REFACTORED SOLUTION.....
const numbers = [1, 2, 3, 4];
const find = includes(numbers, 4);
console.log(find);

function includes(array, searchElement) {
  return array.indexOf(searchElement) !== -1;
}

//MY PERSONAL CORRECTION
const numbers = [1, 2, 3, 4, 10];
const find = includes(numbers, 10);
console.log(find);

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

//MOSH SOLUTION
const numbers = [1, 2, 3, 4, 10];
const find = includes(numbers, 10);
console.log(find);

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}
