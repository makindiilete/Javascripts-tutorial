/*Implement a function that takes two array...The first array contains list of elements and the second array contains a single element to be excluded from the first array. So the function returns a new array without the value passed in the second array....

In the second array, you can exclude as many elements as possible and if in the first array we have an elements that appears more than one,
e.g. [1, 2, 3, 4, 1, 1], if we pass "1" to the second array, the function returns [2, 3, 4]
*/

//MOSH SOLUTION

const numbers = [1, 2, 3, 4, 1, 1];
const output = includes(numbers, [1, 4]);
console.log(output);

function includes(array, excluded) {
  //  we declare a new array with which we will add elements that meet our criteria
  const result = [];
  // we loop through the original array with a variable "element"
  //  We check if the element is not in the excluded array
  for (let element of array)
    if (!excluded.includes(element))
      // we push the elements that are not in the excluded array
      result.push(element);
  //  we return the result
  return result;
}

//RESULT : - [2, 3]

//MY DIFFERENT SOLUTION AFTER FAILURE TO SOLVE THE QUESTION THEN READING MOSH SOLUTION

const numbers = [1, 2, 3, 4, 1, 1];
const output = includes(numbers, [1]);
console.log(output);

function includes(array, excluded) {
  //  We declare a new empty array we want to return.
  const result = [];
  //We loop through the original array.
  //  We check if the element does not exist in the excluded array (if an element does not exist in the array, its index will be -1).
  for (let element of array)
    if (excluded.indexOf(element) === -1)
      // We then push the qualified element dt is not in the excluded array
      result.push(element);
  return result;
}

//RESULT : - [ 2, 3, 4 ]
