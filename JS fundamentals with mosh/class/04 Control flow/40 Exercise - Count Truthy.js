/*Implement a function that takes an array and return the number of elements that are truthy in the array.

 That is it checks the array and count how many elements are in it excluding any elements with any falsy values : undefined, null, '', false, 0, NaN....*/

function countTruthy() {
  //  We want to display a count for total number of truthy values so we need to set a variable and initialise it to 0
  let count = 0;
  //Using the "For....Of" loop, we loop through the array
  //for each element in the array as we are looping, if the value is truthy,
  for (let value of array)
    if (value) {
      //we increment the value of "count"
      count++;
    }
  //then we return the total number we counted after the loop ends
  return count;
}
//here is the array we used for test
const array = [1, 2, 4, "", NaN, undefined, "Mosh", false];
console.log(countTruthy(array));

//RETURN : - 4
