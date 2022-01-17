/*We have learnt about "for, while & do...while" loops, we use all of them to execute an action a number of times. We also have other types of loops which we use to iterate over properties of an object or elements in an array. An example is the "For..In" loop
 *
 * FOR....IN -- OBJECT
 * FOR....OF --- ARRAY*/

const person = {
  name: "Mosh",
  age: 30
};

//"key" is a variable which represents each property in the object
for (let key in person) console.log(key);

/*
RESULT : -
name
age
*/

//Getting the values of the keys (properties)
const person = {
  name: "Mosh",
  age: 30
};

//We use the bracket notation to get the value of each of the properties
for (let key in person) console.log(key, person[key]);

/*RESULT : -
name Mosh
age 30
*/

/*We can also use the For...In to iterate over an array, this is not ideal because there is a better way but let's see how that works*/
const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index);

/*RESULT : -
0
1
2

To get the element at the index, we once again use the bracket notation
*/

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

/*0 red
1 green
2 blue*/

/*Starting from ES6, We have a better way to iterate over arrays using the new "For....Of" loop. And we will check this out in the next lecture.*/
