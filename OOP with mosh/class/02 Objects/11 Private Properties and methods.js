/*Here we will be implementing abstraction that will allow us to hide the details and show only the essentials*/

function Circle(radius) {
  this.radius = radius;

  //For properties we want to hide, we simply remove "this" and change the to variable
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function(factor) {
    //....
  };
  this.draw = function() {
    //here we can simply call those hidden properties directly
    computeOptimumLocation(0.1);
    // defaultLocation;

    // we still use "this" to call the public properties
    // this.radius;
    console.log("draw");
  };
}
const circle = new Circle(10);
//so from here, only rhe "radius & draw()" will be accessible
