/*Earlier in the section about control flow, we learnt about the various loop in js....We learnt we can use the "For...Of" loop to iterate over the elements of an array.*/

//THE FOR...OF METHOD
const numbers = [1, 2, 3];
//In each iteration, the variable 'number' will be set to an element in the array
for (let number of numbers) console.log(number);

//THE FOR...EACH METHOD
const numbers = [1, 2, 3];
/*numbers.forEach(function(number) {
  console.log(number);
});*/

//With the "forEach()" method, the callback function will be executed for each element in the array, each element will be set as a parameter to the function
numbers.forEach(number => console.log(number));

/*Which approach you choose from either the For...Each or For..of is a personal preference but a thing to note is that the for..each call back function can optionally take a parameter and that is the index...We dont get the index with the For...of loop but if you need that, you can use the For...Each loop*/

const numbers = ["a", "b", "c"];

//Here we passing an optional parameter "index" to also log the index of each element in the array
numbers.forEach((number, index) => console.log(index, number));

/*RESULTS : -
0 'a'
1 'b'
2 'c'
*/
