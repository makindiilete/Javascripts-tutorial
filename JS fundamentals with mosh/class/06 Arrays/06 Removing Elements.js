/*Now let us see how we can remove elements from an array*/

const numbers = [1, 2, 3, 4];

//Removing from the End = "pop()"
const last = numbers.pop(); //Expected Output : - [ 1, 2, 3 ]
console.log(numbers);

//Removing from the Begining = "shift()"
const first = numbers.shift(); //Expected Output : - [ 2, 3, 4 ]
console.log(numbers);

//Removing from the middle = "splice(x,y)" x is the starting index, y is the number of elements to be removed
//Starting from index 2, remove one element
const middle = numbers.splice(2, 1);
console.log(numbers); //Expected Output : - [ 1, 2, 4 ]
