/*In this lecture, we will see how to filter an array base on a search criteria

This methods takes a callback function that accepts 3 parameters : value, index & but in this case we only dealing with the value and not interested on the index & array
*/
//Filtering using >= OR === (=== simply means to add, increase and return all of them meeting the condition)
const numbers = [1, -1, 2, 3];
const filterPositive = numbers.filter(value => value >= 0);
console.log(filterPositive); //RESULT = [ 1, 2, 3 ]

// Filtering using <= OR !== (!== simply means to remove, reduce, minus and return the last man standing)
const numbers2 = [1, -1, 2, 3];
const filterPositive2 = numbers2.filter(value => value <= 0);
console.log(filterPositive2); //RESULT = [ -1 ]
