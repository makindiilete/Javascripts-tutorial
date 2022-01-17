/*In ES6, we have two new methods called "every()" and "some()"....Let us image in this array we want to check if all numbers are positive

This methods takes a callback function that accepts 3 parameters : value, index & but in this case we only dealing with the value and not interested on the index & array*/

//EVERY
const numbers = [1, 2, 3];
const allPositive = numbers.every(value => value >= 0);
console.log(allPositive); //Result = "true"

/*This method we run the check on all element in the array and as soon as it finds one which doesnt meet the criteria, it stops the search*/

const numbers = [1, -1, 2, 3];
const allPositive = numbers.every(value => value >= 0);
console.log(allPositive); //Result = "False"

/*This checks all the elements to see if we have any lower that 0 and as soon as it gets to "-1" it stopped searching and return false*/

//SOME : - This checks to see if we have atleast one elements that matches this criteria i.e. In the case of checking for positive numbers in the array, it checks to see if we have atleast one element that is positive

const numbers = [1, -1, 2, 3];
const atleastOnePositive = numbers.some(value => value >= 0);
console.log(atleastOnePositive); //RESULT : - true

/*This methods are new and some older browsers do not support this but we will learn how to make it work on older browsers later.*/
