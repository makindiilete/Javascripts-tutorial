/*Let us see how we can combine two arrays into one or slice an array into two parts.*/

//COMBINE

const first = [1, 2, 3];
const second = [4, 5, 6];
//"concat()" method forms a new array from the concatenation of both arrays so both arrays are unaffected
const combined = first.concat(second);
console.log(combined); //RESULT : - [ 1, 2, 3, 4, 5, 6 ]

//SLICING
const combined = [1, 2, 3, 4, 5, 6];
//"slice()" method will slice the array starting from index 2 and ends at index 4 (the element with the index 4 itself will not be pick, the slicing will end infront of it)
const slice = combined.slice(2, 4);
console.log(slice); // Result = [3, 4]

//2
const combined = [1, 2, 3, 4, 5, 6];
//with the second parameter not declared, "slice()" method here will get all the element from index of 2 to the end to the right
const slice = combined.slice(2);
console.log(slice); // RESULT : [ 3, 4, 5, 6 ]

//3
const combined = [1, 2, 3, 4, 5, 6];
//With no parameter, we get a copy of the original array
const slice = combined.slice();
console.log(slice); // [ 1, 2, 3, 4, 5, 6 ]

/*NOTE : -  If you are dealing with primitive values, the array elements will be copied into the target array but if you are dealing with objects, the objects themselves are not copied instead their reference are copied which means any change in any of the two array we combined will affect the combined array as well because all are targeting the same reference whereas for value types, all of them are separate objects....Let see what we mean*/

//Value type
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
//changing the first element in the "first" array
first[0] = 10;
console.log(combined); //[ 1, 2, 3, 4, 5, 6 ] The combined array not affected

//Reference type
const first1 = [{ id: 1 }];
const second2 = [4, 5, 6];
const combined3 = first1.concat(second2);
first1[0].id = 10;
console.log(combined3); // [ { id: 10 }, 4, 5, 6 ] The change took effect in the combined array

//This same principle is applicable to slicing
