/*Now we have seen all the primitive types in JS, now we want to check the reference types : Object, Array, & Function.

We will explore object. An object in JS is like an object in real life. Think of a person, a person has name, age, address etc. These are properties of a person, we have the same concept in JS, so when we are dealing with multiple related variables, we can put these variables inside an object. Like we have "name & age" variables, they are highly related so instead of declaring them separately, we can declare a "person" object and place them inside and instead of references the variables, we can ref the person object. It makes our code cleaner.
*/

//Person object
let person = {
  //Inside this object{}, we add one or more key value pairs. The keys are the properties of "person" (name, age), the values are their values ("Mosh", 30)
  name: "Mosh",
  age: 30
};
console.log(person);

/*RESULT: -

{name: "Mosh", age: 30}
age: 30
name: "Mosh"
*/

//ACCESSING THE PROPERTIES OF AN OBJECT
//Person object
let person = {
  name: "Mosh",
  age: 30
};

//Dot Notation
person.name = "John";
console.log(person.name);

//Bracket Notation : - Here we pass the property we want to access as a string inside the []
person["name"] = "Messi";
console.log(person.name);

/*DOT NOTATION VS BRACKET NOTATION?
You might be confused about which approach you should use : - The dot notation should be your default approach because it is easier to use but the bracket notation also has its usefulness in some case scenario. For example : - Let us assume we have a person object with 4 different properties and the user will select one of the property at runtime and then we change the value of the property the user selects, We will not be able to use the dot notation in this case because we do not know which property it will be so we can easily solve this with the bracket notation as we can see below*/

//Person object
let person = {
  name: "Mosh",
  age: 30,
  address: "No 7, Araromi, Ibeju",
  country: "Nigeria"
};

//Bracket Notation
let selection = "name";
person["selection"] = "Michael";
