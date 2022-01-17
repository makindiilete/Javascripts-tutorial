/*Javascript are dynamic in nature which means we can add new properties or remove existing ones on the fly*/

//ADDITION
const circle = {
  radius: 1
};

//Adding new properties
circle.michaelz = "mayowa";
circle.draw = function() {};

console.log(circle);

/*RESULT : -
{ radius: 1, michaelz: 'mayowa', draw: [Function] }
*/

//DELETING
const circle = {
  radius: 1
};

//Adding new properties
circle.michaelz = "mayowa";
circle.draw = function() {};

//Deleting a member from the object
delete circle.radius;

console.log(circle);

//RESULT : - { michaelz: 'mayowa', draw: [Function] }

/*It might be confusing to some developers how comes we are able to add or remove properties from an object since we used the "const" keyword to declare it.

The thing is we can only add or remove the properties, we cannot redeclare the circle object to another object like below

const circle = {
  radius: 1
};

//trying to redeclare
circle = {];

This will give an error, "TypeError: Assignment to constant variable"
*/
