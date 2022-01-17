/*In OOP, functions are objects...It has the same methods and properties like normal objects*/

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

//We can call all objects methods and properties on functions
Circle.name;
Circle.length;
Circle.constructor;

const another = new Circle(1);

/*RESULT: -
 Circle.name
"Circle"

Circle.length
1

Circle.constructor
ƒ Function() { [native code] }*/
