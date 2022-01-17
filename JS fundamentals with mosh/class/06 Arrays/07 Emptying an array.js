/*Now we know how to remove element from an array and now we will learn how to empty an array. This will enable us remove all the elements in this array.

There are different solutions but overall, solution 2 or 1 is the best*/

//1

// const numbers = [1, 2, 3, 4];
let numbers = [1, 2, 3, 4];
let another = numbers;

//Solution 1 : - This solution works if you did not have any references pointing to the original array because that will still be pointing to the array you tried to empty
numbers = [];
console.log(numbers);
console.log(another);

/*RESULTS : -
Here we have the emptied array
[]
Here we have the "another" variable still pointing to the old array
[ 1, 2, 3, 4 ]
*/

//2

let numbers = [1, 2, 3, 4];
let another = numbers;

//Solution 2 : - This will remove all elements and useful when you have multiple references to the array
numbers.length = 0;
console.log(numbers);
console.log(another);

/*RESULT : - [] []*/

// 3

let numbers = [1, 2, 3, 4];
let another = numbers;

//Solution 3 : - Here we will be using the splice method to remove all elements in this array...This will go to index 0 and remove all elements
numbers.splice(0, numbers.length);
console.log(numbers);
console.log(another); //RESULT : - [], []

//4
let numbers = [1, 2, 3, 4];
let another = numbers;

//Solution 4 : - Here we are using the pop() method to loop and keep removing elements until the total length is 0......THIS IS NOT RECOMMENDED BECAUSE WHEN YOU HAVE AN ARRAY WITH PLENTY DATA, IT WILL CAUSE PERFORMANCE COST.
while (numbers.length > 0) numbers.pop();
console.log(numbers);
console.log(another); // Result : - [], []
