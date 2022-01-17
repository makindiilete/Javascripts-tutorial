/*We have learnt how to combine two arrays using the concat method, there is another method of joining two arrays in ES6 using the spread operator*/

const first = [1, 2, 3];
const second = [4, 5, 6];
//Here we are using the spread operator "..." to spread all elements of the "first" and "second" into the "combined" array..
//When we spread an array, all its elements are returned individually
const combined = [...first, ...second];
// const combined = first.concat(second);
console.log(combined); // [1, 2, 3, 4, 5, 6]

/*With the spread operator, we get a better visualisation of how the elements are added into the new array, with the above we see that all the element of the first array are first added followed by all the elements of the 2nd array.

With the spread operator, we have more flexibility, while combining the two arrays, we can add more elements between them
*/

//Adding more elements in the combined array

const first = [1, 2, 3];
const second = [4, 5, 6];
//Adding more elements
const combined = [...first, "a", ...second, "b"];
console.log(combined); //[ 1, 2, 3, 'a', 4, 5, 6, 'b' ]

/*We learnt in the last lecture that if we use slice to slice an array and we do not pass a parameter, it returns a copy of the array we trying to slice, with the spread operator, we can achieve same thing*/

const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, "a", ...second, "b"];
//returning a copy of the combined array with slice
// const copy = combined.slice();

//Returning a copy of the combined array easily with spread operator
const copy = [...combined];
console.log(copy); // [ 1, 2, 3, 'a', 4, 5, 6, 'b' ]
