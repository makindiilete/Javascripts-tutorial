/*We already learnt how to enumerate the properties of an object...Using this method, we can get all the properties of an object and copy them into another object*/

const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  }
};

//creating another object and set it to empty object
const another = {};

//copying all the properties of circle to another
for (let key in circle) another[key] = circle[key];
//logging another object to the console
console.log(another);

/*
RESULTS: -

{ radius: 1, draw: [Function: draw] }
*/

/*Now in modern javascript, we have better way to achieve the same thing*/

const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  }
};

//we use the "Object.assign()" this takes two parameters "target & source", target is the target object you want to copy into, this can be an empty object or existing object already having one or more properties, source is the object from which you want to copy the properties
const another = Object.assign({}, circle);
console.log(another);

//cloning into already existing object
const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  }
};

const another = Object.assign(
  {
    color: "red"
  },
  circle
);
console.log(another);

/*RESULT : - { color: 'red', radius: 1, draw: [Function: draw] } */

//ANOTHER ELEGANT WAY TO CLONE AN OBJECT IS USING THE SPREAD OPERATOR
const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  }
};

const another = { ...circle };
console.log(another);
