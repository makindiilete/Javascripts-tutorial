/*Create a function "sum" that takes a varying number of arguments and return their sum...We can pass as many arguments as possible.*/

//MY SOLUTION
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 5, 5, 6)); //RESULT : - 31

//MOSH SOLUTION 1
//here we using the rest operator which converts our arguments into an array
function sum(...items) {
  //  bcos our items is now an array, we can use the reduce method to find the sum
  return items.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); //RESULT = 10

//MOSH SOLUTION 2 - Array
function sum(...items) {
  return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4]));

/*RESULT : -
This returns the array we passed and if we inspect it to find out why by logging items to the console

function sum(...items) {
  //logging items to the console
  console.log(items);
  return items.reduce((a, b) => a + b);
}

RESULT : - [ [ 1, 2, 3, 4 ] ]

We see that items is an array inside another array. This is because the rest operator already converts our objects into an array so declaring items as an array put the items array inside the rest operator array.

*/

function sum(...items) {
  //If we have a nested array (we pass an array as argument which goes inside the rest operator array), we check if the child array (array argument we passed) is an array and its not empty
  if (Array.isArray(items[0]) && items.length !== 0) {
    //if this is true we try d code below
    try {
      // we first reset "items' parameter from the parent array (rest operator []) to the child array ([1,2,3,4)
      items = [...items[0]];
      //we then reduce it
      return items.reduce((a, b) => a + b);
      //  and we catch any error
    } catch {
      console.log("Array cannot be empty");
    }
  }
  //else if the items inside the rest operator array is not another array, then we only have one array and not a nested array so we go ahead and reduce it straight up
  else return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4])); //RESULT : 10
console.log(sum(1, 2, 3, 4)); //RESULT : 10
