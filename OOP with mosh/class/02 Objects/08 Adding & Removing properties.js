//ADDING PROPERTIES

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);

/*Here we have an object "circle", this object is having just 1 property "radius" and a method "draw"...We can add another property to this object on the fly

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);
//a new property added on the fly outside the function
circle.location = { x: 1 };
console.log(circle);


If we check our circle object in the console for verification we get: -

Circle {radius: 10, draw: ƒ, location: {…}}
draw: ƒ ()
location: {x: 1}
radius: 10

We have our new location property added. But why do we need this in real world scenario?
We might have a user object which we will have some properties we expect the user to enter but we might want to add another property like "{user.token: 111jew3} on the fly to this object.
*/

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new Circle(10);
circle.location = { x: 1 };
//Another way of writing and adding the location property is
//here we use the [] and with a string to ref a property we want to add
circle["location"] = { x: 1 };

/*As we can see, the first way of writing & adding the location property is easier than the 2nd way with [] but the 2nd method has its own usefulness in some scenario e.g. When you want to access an object property which is written in a way we cant access it directly via dot notation like below*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
}
const circle = new Circle(10);
circle.location = { x: 1 };

//we cant add a new property "center location" directly like this
circle.center location = {x:2};
//but instead we use the bracket notation
circle["center location"] = {x:2};

/*And in the console we get
Circle {radius: 10, draw: ƒ, location: {…}, center location: {…}}
center location: {x: 2}
draw: ƒ ()
location: {x: 1}
radius: 10
*/

//REMOVING PROPERTY FROM EXISTING OBJECT : - A real world usage is if you have a user object you want to send to the client but there are some properties in that user object which you dont want to include e.g. password, credit card information etc. In that case you will dynamically exclude one or more properties from an object

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    };
}
const circle = new Circle(10);
circle.location = { x: 1 };

const propertyName = "center location";
circle["center location"] = { x: 2 };
//removing/deleting the location property
delete circle.location;
//OR delete circle["location"]
console.log(circle);

/*In the console we get
Circle {radius: 10, draw: ƒ, center location: {…}}
center location: {x: 2}
draw: ƒ ()
radius: 10
*/
