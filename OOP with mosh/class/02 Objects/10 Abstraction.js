/*Abstraction as we have learnt is a way to hide some details and show only the essentials. let examine the code we have below*/

function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function() {
    //....
  };
  this.draw = function() {
    this.computeOptimumLocation();
    console.log("draw");
  };
}
const circle = new Circle(10);

/*When a user type "circle." all the properties in the functions are available to be called. We might want to hide the "defaultLocation & computeOptimumLocation" to be called outside of the function because if called there, it might break the code.

In the next lecture, we will check how to "hide the details and show the essentials."*/
