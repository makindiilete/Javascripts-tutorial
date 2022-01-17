/*We will be learning how to sort arrays*/

//Example 1 - Using the "sort()" method. This converts each elements to a string and return a sorted array.

const numbers = [3, 2, 1];
numbers.sort();
console.log(numbers); //Expected Output : - [ 1, 2, 3 ].

/*Another method that works hand in hand with the sort method is the "reverse()" method with which we can reverse an array*/

const numbers = [3, 2, 1];
numbers.sort();
console.log(numbers);
//Reverseing the [1,2,3] array
numbers.reverse();
console.log(numbers);

/*RESULTS : -
[ 1, 2, 3 ]
[ 3, 2, 1 ]

The sort method is pretty useful when you have numbers and strings in an array but when you have objects, it does not work by default we need to do extra work
*/

//SORTING OBJECTS : - We want to sort the objects by their "name" which means "J" for Javascript should come first before "N"
const courses = [{ id: 1, name: "Node.js" }, { id: 1, name: "Javascript" }];
//Calling the sort method on objects did not work
courses.sort();
console.log(courses); //RESULT : - [ { id: 1, name: 'Node.js' }, { id: 2, name: 'Javascript' } ]

//PROPER WAY

const courses = [{ id: 1, name: "Node.js" }, { id: 2, name: "Javascript" }];
courses.sort(function(first, second) {
  // a < b ==> -1
  // a > b ==> 1
  // a === b ==> 0
  if (first.name < second.name) return -1;
  if (first.name > second.name) return 1;
  return 0;
});
console.log(courses);

/*RESULT
[ { id: 2, name: 'Javascript' }, { id: 1, name: 'Node.js' } ]

But if we change the "Javascript" to lowercase "javascript", now "Nodejs comes first"
*/

const courses = [{ id: 1, name: "Node.js" }, { id: 2, name: "javascript" }];
courses.sort(function(a, b) {
  // a < b ==> -1
  // a > b ==> 1
  // a === b ==> 0
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(courses);

/*RESULT : -
[ { id: 1, name: 'Node.js' }, { id: 2, name: 'javascript' } ]

With lowercase "j", now Nodejs comes first. This is as a result of the ascii table :  American standard code for information Inter-exchange bcos on the Ascii table, the numerical representation of lowercase "j" is 107, where "N" is 78 so "N" is lower than "j" on the ascii table and that is while we have the "Nodejs" coming first over "javascript"...You can check out more on google.

To prevent issue like this, we can first convert all names to uppercase before sorting
*/

//SOLUTION
const courses = [{ id: 1, name: "Node.js" }, { id: 2, name: "javascript" }];
courses.sort(function(first, second) {
  // a < b ==> -1
  // a > b ==> 1
  // a === b ==> 0
  //You can either use "toUpperCase()" or "lowercase()".. All we want is for all to either be small or capital letter
  const firstName = first.name.toUpperCase();
  const secondName = second.name.toUpperCase();
  if (firstName < secondName) return -1;
  if (firstName > secondName) return 1;
  return 0;
});
console.log(courses);

/*RESULT : - [ { id: 2, name: 'javascript' }, { id: 1, name: 'Node.js' } ]*/
