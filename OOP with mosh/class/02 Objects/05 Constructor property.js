/*Every object in js has a property called constructor and that ref the function that was used to create that object.*/

//Here we have two objects "circle & another"
//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
      console.log("Radius is ", radius);
    }
  };
}
//object one
const circle = createCircle(1);

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
//object two
const another = new Circle(1);

/*We can get the function that was used to create this objects by going to the console and running the codes: -

"another.constructor" : - This gives us
another.constructor
ƒ Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

Here we can see that our function which was used to create the "another" object was returned.

"circle.constructor" : - This gives us
circle.constructor
ƒ Object() { [native code] }

//This appear a little bit different from the "another" object, this is because it was not a constructor function that was used to create the object like "another" object so at runtime but because it is an object literal i.e. we have the {} there, a default constructor is added to server as the constructor property which is what we have there "ƒ Object() { [native code] }"
*/

//LITERALS
/*Object literals :         {}  :               new Object();
 * String literals :         '', "", ``  :       new String();
 * Boolean literals:         true, false :       new Boolean();
 *
 * So as a recap, Every object in OOP has a constructor property and this property is the function that was used to create the object.
 * OBJECT CREATED WITH CONSTRUCTOR FUNCTIONS RETURNS THE SAME FUNCTION IN THE CODE AS THEIR CONSTRUCTOR PROPERTY
 *
 * OBJECT CREATED WITH OBJECT LITERAL OR FACTORY RETURNS ƒ Object() { [native code] } AS THEIR CONSTRUCTOR PROPERTY*/
