/*Enumeration : - Making separate mention, recounting
So enumerating properties simply means recounting, looping, listing out properties of an object.
We can do this using the FOR...IN LOOP*/

//Here is our function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);
//We want to list out every property in this object "circle"

//In every iteration/looping, our variable "key" will hold the value of one key "property" in this object
for (let key in circle) {
  console.log(key);
}

/*RESULT: -
result
draw

Here we get the properties and methods listed out, we can also list them with their values*/

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);
//In every iteration/looping, our variable "key" will hold the value of one key "property" in this object
for (let key in circle) {
  console.log(key, circle[key]);
}

/*RESULT: -
 radius 10
draw ƒ () {
    console.log("draw");
  }
  */

//Getting only the properties and not the methods
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);
//In every iteration/looping, our variable "key" will hold the value of one key "property" in this object
for (let key in circle) {
  //here we check to display only the properties that are not methods/functions
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

/*RESULT : -
radius 10*/

//Another method to list all the properties of an object and list them as an array
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);

const keys = Object.keys(circle);
console.log(keys);

/*RESULT: -
 (2) ["radius", "draw"]

 Here the methods cannot be separated from properties*/

//Another method to list all the properties putting each property and method in separate array
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);

for (let entry of Object.entries(circle)) console.log(entry);

/*RESULT: -
[ 'radius', 10 ]
[ 'draw', [Function] ]
*/

//checking to see if a property exist in a function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);

const keys = Object.keys(circle);
console.log(keys);
//checking if a property "radius" exist in the circle object
if ("radius" in circle) console.log("Circle has a radius");

/*RESULT: -
(2) ["radius", "draw"]
index.js:13 Circle has a radius*/
