/*We have implemented abstraction to hide the "defaultLocation" but we might want to have access to this property outside the function just to read it alone and not to write or change its value.*/

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  this.draw = function() {
    console.log("draw");
  };
  //bcos "defaultLocation" is a hidden property cos its having "let" and not "this", we cannot access it in the circle object in line 18 (const circle = new Circle(10));, so in other to access it, we need to use the "defineProperty" which makes it read only and accessible but the value cannot be changed and this takes 3 args (this, d property name and a getter)
  Object.defineProperty(this, "defaultLocation", {
    //here we have a "getter" which we use to read a property
    get: function() {
      return defaultLocation;
    }
  });
}
const circle = new Circle(10);
console.log(circle);

/*RESULT: -
 Circle {radius: 10, draw: ƒ}
draw: ƒ ()
radius: 10
//clicking the (...), the value of the property will be displayed
defaultLocation: (...)
get defaultLocation: ƒ ()

//After clicking on (...)

Circle {radius: 10, draw: ƒ}
draw: ƒ ()
radius: 10
defaultLocation: Object
x: 0
y: 0
__proto__: Object
get defaultLocation: ƒ ()

"defaultLocation" in this case is called a read only property. We can only read its but we cannot set the value from the outside. To be able to set the value of a read only property like "defaultLocation", we use "setter"
*/

//USING SETTER TO SET PROPERTY OF A READ ONLY VARIABLE
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  this.draw = function() {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    //here we have a "getter" which we use to read a property
    get: function() {
      return defaultLocation;
    },
    //here we are using a setter to set the value of the read only property from the outside
    set: function(value) {
      //in this setter, we can perform validation to validate the input we are going to pass to set this read only variable. We want to make sure it contains key value pair for x and y else we return an error
      if (!value.x || !value.y) throw new Error("Invalid Location.");
      defaultLocation = value;
    }
  });
}
const circle = new Circle(10);
//here now we are setting the values of x and y
circle.defaultLocation = { x: 3, y: 4 };
console.log(circle);

/*RESULT: -
Circle {radius: 10, draw: ƒ}
draw: ƒ ()
radius: 10
defaultLocation: Object
x: 3
y: 4
__proto__: Object
get defaultLocation: ƒ ()
set defaultLocation: ƒ (value)
__proto__: Object
*/

//Confirming the validation error
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  this.draw = function() {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    //here we have a "getter" which we use to read a property
    get: function() {
      return defaultLocation;
    },
    //here we are using a setter to set the value of the read only property from the outside
    set: function(value) {
      //in this setter, we can perform validation to validate the input we are going to pass to set this read only variable. We want to make sure it contains key value pair for x and y else we return an error
      if (!value.x || !value.y) throw new Error("Invalid Location.");
      defaultLocation = value;
    }
  });
}
const circle = new Circle(10);
//here now we are setting the read only variable to a number instead of the x and y
circle.defaultLocation = 1;
console.log(circle);

/*
RESULT: -
Uncaught Error: Invalid Location.
    at Circle.set (index.js:16)
    at index.js:23
So our validation works as we can see.*/
