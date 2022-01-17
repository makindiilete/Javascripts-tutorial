/*Write a function "arrayFromRange(){}", it takes two parameters "min & max" and as arguments we pass (1, 4)
When we run the program, we get an array of numbers from 1 to 4. We can also supply arguments of negative numbers (-10, -4) and we we will get
[-10, -9, -8, -7, -6, -5, -4]
*/

//MY SOLUTION

//Negative arguments
function arrayFromRange(min, max) {
  //  We first declare an empty array
  let array = [];
  //We then loop from the minimum number to the maximum number
  for (let i = min; i <= max; i++) array.push(i);
  //for every loop, we push the number into our empty array till we get to the last
  console.log(array); //RESULT : - [ -10, -9, -8, -7, -6, -5, -4 ]
}
const numbers = arrayFromRange(-10, -4);
console.log(numbers);

//Positive arguments
function arrayFromRange(min, max) {
  //  We first declare an empty array
  let array = [];
  //We then loop from the minimum number to the maximum number
  for (let i = min; i <= max; i++) array.push(i);
  //for every loop, we push the number into our empty array till we get to the last
  console.log(array);
}
const numbers = arrayFromRange(1, 4);
console.log(numbers); //RESULT : - [ 1, 2, 3, 4 ]

// MOSH SOLUTION
const numbers = arrayFromRange(-10, -4);
console.log(numbers);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}
