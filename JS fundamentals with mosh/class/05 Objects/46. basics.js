/*We have learnt the basics of an object earlier in the course and we have talked about the fact that the function of an object is to group related variables and inside an object we have key value pairs with keys bin the properties while the values can be any type either primitive or reference type.*/

//Related variables
let radius = 1;
let x = 1;
let y = 1;

//we can instead group all ds variables into an object instead of declaring them separately

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true
};

//Apart from using object to group related variables, we often have functions that should work on this variables. For example we might want to declare a function to draw a circle based on the variables function draw{}, or to move a circle "function move{}"... We can have this function declared inside the object so both the methods and properties the circle depends on can be found inside the object...

//Embedding a function inside of an object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log("Draw");
  }
};

//We can call each of these properties using the dot notation "circle." and it will list out all the properties and methods which we can access...
/*What we have here is call
// Object-oriented Programming (OOP)

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log("Draw");
  }
};

In OOP, when we have a function inside an object, we dont say we have the draw function instead we say we have the "draw method" inside the circle object....

The method we are using to create our objects now is called the "Object Literal" but as our app grows, we have better ways of creating objects
*/
