/*A funtion is a statement or pair of statements that is either performing a task or calculating a value*/

//Performing a task : Display something in the console
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

//Calculating a value
function square(number) {
  //we need to "return" this value to whoever is performing the calculation
  return number * number;
}
//calling the square function
let result = square(2);
console.log(result);

//OR
console.log(square(2));

/*In the square function above, we have two function calls :-
The first function call is "square(2)"
The second function call is "log()" and we are passing an argument. This means there is a log function define somewhere*/
