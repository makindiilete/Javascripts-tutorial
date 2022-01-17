//Parameter
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

/*RESULT : -
{ radius: 5, draw: [Function: draw] }
{ radius: 6, draw: [Function: draw] }
*/

/*Now in the console, we can call the draw method using "circle1.draw()"...

Apart from factory function way of creating objects, we can also use constructor functions.
*/
