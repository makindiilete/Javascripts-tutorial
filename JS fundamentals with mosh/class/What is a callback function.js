/*A callback function is a function that is passed as a parameter to a javascript function that the function is not standing alone but it is inside of a method*/

const numbers = [1, 2, 3];
//A CALL...BACK FUNCTION
numbers.forEach(number => console.log(number));

//or

numbers.forEach(function(number) {
  console.log(number);
});
