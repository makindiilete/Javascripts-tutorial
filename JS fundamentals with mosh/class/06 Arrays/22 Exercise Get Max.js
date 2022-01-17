/*Implement a function "getMax" we give it an array as a parameter and it returns the largest number in that array.....If you give it an empty array, it returns "undefined"*/

//MY SOLUTION
const numbers = [9, 2, 3, 4];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
  //  We initialise the number we looking for to the first element in the array "9"
  //  we set our first number to be "9"
  let number = array[0];
  //we loop tru the array and compare each number to be greater than "9", if we find a number greater than 9, 9 is dropped and that number is picked as our new number and until we find another number greater than that number...We return that number as our champion...
  //we pick the first element "9" and check if it is greater than our variable "number" 9 !== > 9 so our variable "9" remains the same
  //  we compare with all elements in the array and bcos we found no number greater than the initial value of our variable "9"
  for (let element of array) if (element > number) number = element;
  // we simply return 9
  return number;
}
//RESULT = 9

//TESTING WITH ANOTHER NUMBER
const numbers = [1, 2, 3, 4];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
  let number = array[0];
  for (let element of array) if (element > number) number = element;
  return number;
}

//RESULT = 4

//TESTING WITH AN EMPTY ARRAY
const numbers = [1, 2, 3, 4];
const max = getMax([]);
console.log(max);

function getMax(array) {
  let number = array[0];
  for (let element of array) if (element > number) number = element;
  return number;
}

//RESULT : - undefined

//IMPLEMENTING THE FUNCTION WITH THE REDUCED FUNCTION

function getMaxReducedMethod(array) {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator) accumulator = currentValue;
    return accumulator;
  }, array[0]);
}
const numberss = [11, 2, 3, 10];
const maxx = getMaxReducedMethod(numberss);
console.log(maxx);

//RESULT : - 11

//MOSH SOLUTION

const numbers = [11, 2, 3, 10];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (let i = array[1]; i < array.length; i++)
    // if (i > max) max = i;
    if (array[1] > max) max = array[i];
  return max;
}

// MOSH REDUCE METHOD

const numbers = [11, 2, 3, 10];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
  return array.reduce((accumulator, currentValue) =>
    currentValue > accumulator ? currentValue : accumulator
  );
}

/*Anytime you are dealing with array of values and you want to get a single value as a result of iterating that array, think of using the "reduce()" method.....*/
