/*In the last lecture we learnt about the function which we pass to the find method as an argument with which we use to find an object in an array, We can write the same code cleaner and better using what we call the Arrow Function.

This arrow function is used whenever we want to pass a function as an argument to a method.
*/
const names = [
  { id: 1, name: "Michaelz" },
  { id: 2, name: "Mayowa" },
  { id: 3, name: "Damilola" },
  { id: 4, name: "Adedayo" }
];

//Using the arrow function :  Remove the "function" keyword and pass ==> between the parameter and the statements...
const found = names.findIndex(element => {
  return element.name === "Damilola";
  //  ///    ////   ///
  //// ////
});

console.log(found); //Expected Output = 2

// IF WE ARE DEALING WITH SINGLE STATEMENT FUNCTION, THAT IS RETURNING A VALUE, WE CAN ALSO ELIMINATE THE {}

const names = [
  { id: 1, name: "Michaelz" },
  { id: 2, name: "Mayowa" },
  { id: 3, name: "Damilola" },
  { id: 4, name: "Adedayo" }
];

//Using the arrow function for single statement "that is returning a value":  Remove the {} and the "return"
const found = names.findIndex(element => element.name === "Damilola");

console.log(found); //Expected Output = 2

//IF WE ARE DEALING WITH FUNCTIONS WITH NO PARAMETERS

const names = [
  { id: 1, name: "Michaelz" },
  { id: 2, name: "Mayowa" },
  { id: 3, name: "Damilola" },
  { id: 4, name: "Adedayo" }
];

//Using the arrow function for single statement:  Remove the {} and the "return"
const found = names.findIndex(() => element.name === "Damilola");

console.log(found); //Expected Output = 2
