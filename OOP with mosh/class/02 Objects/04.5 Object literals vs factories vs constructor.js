/*Both factory and constructor are pure functions while object literal is a variable that takes an object as its value.....The difference between factory and constructor function is that constructor functions declares its properties with the "this" keyword and the function is called with the "new" operator.*/

//Object literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw");
  }
};
circle.draw();

//factories
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = createCircle(1);

//constructor
function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const circle = new CreateCircle(1);
