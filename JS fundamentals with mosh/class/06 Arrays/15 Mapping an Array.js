/*Another very useful and powerful method we have in javascript is the "map()" method with which we can map each item in an array into something else..

For example, we can map each element in the array into html markup
*/

//MAPPING INTO STRING
const numbers = [1, -1, 2, 3];
const filterPositive = numbers.filter(value => value >= 0);
//Mapping each item into html list
const mappedItems = filterPositive.map(value => "<li>" + value + "</li>");
console.log(mappedItems); //RESULT : - [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

//This returns an array of strings but we can use the "join()" method we learn earlier to join them and create a string from the array

//JOINING TO BE A HTML MARKUP
const numbers = [1, -1, 2, 3];
const filterPositive = numbers.filter(value => value >= 0);
const mappedItems = filterPositive.map(value => "<li>" + value + "</li>");
const html = mappedItems.join("");
console.log(mappedItems);
console.log(html);

/*RESULT : -
[ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
<li>1</li><li>2</li><li>3</li>
*/

//ADDING <UL> TAG
const numbers = [1, -1, 2, 3];
const filterPositive = numbers.filter(value => value >= 0);
const mappedItems = filterPositive.map(value => "<li>" + value + "</li>");
const html = "<ul>" + mappedItems.join("") + "</ul>";
console.log(mappedItems);
console.log(html);

/*RESULT : - <ul><li>1</li><li>2</li><li>3</li></ul>
There is more elegant way to do the same thing which we will check out later
*/

//MAPPING INTO OBJECTS

// 1
const numbers = [1, -1, 2, 3];
const filterPositive = numbers.filter(value => value >= 0);
const mappedItems = filterPositive.map(value => {
  const obj = { id: value };
  return obj;
});
console.log(mappedItems);

// 2
const numbers = [1, -1, 2, 3];
const filterPositive = numbers.filter(value => value >= 0);
const mappedItems = filterPositive.map(value => {
  //here we mapping them into an object
  return { id: value };
});
console.log(mappedItems);

// 3
const numbers = [1, -1, 2, 3];
const filterPositive = numbers.filter(value => value >= 0);
//here we need to put the object inside () else the code will not work bcos JS will not interpret the {} as object by default in this case
const mappedItems = filterPositive.map(value => ({ id: value }));
console.log(mappedItems);

//RESULT : - [ { id: 1 }, { id: 2 }, { id: 3 } ]
//This is very useful when building real world apps

/*We have learnt that both filter and map returns a new array without modifying the existing array...THIS 2 METHODS ARE CHAINABLE, THEY CAN BE COMBINED INTO 1.*/

const numbers = [1, -1, 2, 3];
const methodChain = numbers
  //  first method "filter"
  .filter(value => value >= 0)
  //  second method "map"
  .map(value => ({ id: value }));
console.log(methodChain);

//result : - [ { id: 1 }, { id: 2 }, { id: 3 } ]

//WE CAN STILL INCREASE THE CHAIN FURTHER

const numbers = [1, -1, 2, 3];
const methodChain = numbers
  //  first method "filter"
  .filter(value => value >= 0)
  //  second method "map"
  .map(value => ({ id: value }))
  .filter(obj => obj.id > 1);
console.log(methodChain);

//result : - [ { id: 2 }, { id: 3 } ]
