/*We have a function called "move" and we use the function to move an element in an array.
The function takes 3 parameters : - array, index, offset
The "array" is the array we are dealing with
The "index" is the index of the element we want to move
The "offset" is the place we want to move it to or the new index we want to give it...
If we pass an "offset" that is more than the length of the array, we get error "Invalid offset" using "console.error()" method.
This return a new array with the original array unaffected.
*/

//MOSH SOLUTION : - To be able to change the position of an element in the array,
/*
We need to first clone the original array
(1) We then need to remove the element from the array : We use the "splice()" method to do this and when we use the splice method to remove an element from an array, we get an array in return containing all the removed elements, so since we are removing just one element and we need to get the value of this element, we will remove and then get the value of the element using "splice(index, 1)[0]" where "[0]" returns the first element in the spliced array which definitely is the number we removed
(2) We will then add the element back to the array but at a specific position using the splice method also using the splice method

*/

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);
console.log(output);

function move(array, index, offset) {
  //we clone the original array
  const clone = [...array];
  console.log("This is the cloned array", clone);
  console.log(`We want to go to the index of ${index} and remove one element`);
  //    we remove the element with the given index and access the first element from the returned array
  const removedElement = clone.splice(index, 1)[0];
  console.log("So from the cloned array, we removed ", removedElement);
  console.log("The cloned array is now ", clone);
  //   we add the removed element back to the array but at a specific position
  clone.splice(offset, 0, removedElement);
  console.log(
    `To change the position of ${removedElement} in the array, we added back the ${removedElement} "removed element" to the position of ${offset} "offset" and our new array is [${clone}]`
  );
}

/*RESULT
This is the cloned array [ 1, 2, 3, 4 ]
We want to go to the index of 0 and remove one element
So from the cloned array, we removed  1
The cloned array is now  [ 2, 3, 4 ]
To change the position of 1 in the array, we added back the 1 "removed element" to the position of 1 "offset" and our new array is [2,1,3,4]
*/

//APPLYING VALIDATION
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, -1);
console.log(output);

function move(array, index, offset) {
  //  Here we validate that the value of the offset is not greater or equal to the length of the array and also not less than 0
  if (offset >= array.length || offset < 0) {
    console.error("Invalid offset");
    return;
  }
  //we clone the original array
  const clone = [...array];
  console.log("This is the cloned array", clone);
  console.log(`We want to go to the index of ${index} and remove one element`);
  //    we remove the element with the given index and access the first element from the returned array
  const removedElement = clone.splice(index, 1)[0];
  console.log("So from the cloned array, we removed ", removedElement);
  console.log("The cloned array is now ", clone);
  //   we add the removed element back to the array but at a specific position
  clone.splice(offset, 0, removedElement);
  console.log(
    `To change the position of ${removedElement} in the array, we added back the ${removedElement} "removed element" to the position of ${offset} "offset" and our new array is [${clone}]`
  );
}
