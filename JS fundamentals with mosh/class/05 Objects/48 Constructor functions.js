//CONSTRUCTOR FUNCTIONS

//Camel Notation: oneTwoThreeFour
//Pascal Notation: OneTwoThreeFour

//Pascal Notation
function Circle(radius) {
  //we dont return an object here, we use "this" to declare our properties.
  this.radius = radius;
  this.draw = function() {
    console.log("Draw");
  };
}
//Creating objects...
/*The "new" keyword here creates an empty object just like: const x = {} and then return all the properties using the "this"*/
const circle1 = new Circle(5);
console.log(circle1);
const circle2 = new Circle(6);
console.log(circle2);

//FACTORY FUNCTIONS
//Camel Notation
function circle(radius) {
  //return is mandatory for factory functions. This return d same object
  return {
    // radius: radius,
    /*draw: function() {
          console.log("Draw");
        }*/

    //ES6
    radius,
    draw() {
      console.log("Draw");
    }
  };
}
//Creating different circle objects and passing different radius parameters
const circle1 = circle(5);
console.log(circle1);
const circle2 = circle(6);
console.log(circle2);

/*You can use any of factory function or constructor function...Use factory functions if you are not coming from java or .net background.
OR PICK ONE PATTERN AND JUST STICK TO THAT
*/
