/*Every object in js has a property called constructor and that ref the function that was used to create that object.
What this statement means is that, every object is made up of properties and methods (we already know this), so there is a hidden property that every object contains which is the "constructor".. We know we can access properties and methods of every objects with the dot notation "object.property", so we can access the constructor function also using "object.constructor" and this will return the function that was used to create this object
*/

//Factory function
function circleFactory(radius) {
  return {
    radius,
    draw() {
      console.log("Circle Factory function");
    }
  };
}

//Calling the constructor property of the factory function
const circle2 = circleFactory(5);
console.log(circle2.constructor);

/*RESULTS : -
function Object() { [native code] }

As you can see here, the function returned is somehow different from the factory function...This is the same for object literal and factory function....This return the default object literal
*/

//Constructor property
//This is the function which is used to create the "circle1" object in line 9
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("Draw");
  };
}

//Calling the constructor property of the constructor function
const circle1 = new Circle(5);
console.log(circle1.constructor);

/*RESULTS : -

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("Draw");
  };
}

You can see this return the exact function we use to create this "circle2" object
*/
