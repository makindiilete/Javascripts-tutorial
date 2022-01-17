/*QUESTION : -
Write a function that takes two numbers and returns the maximum of the two*/

//MY SOLUTION
function max(num1, num2) {
  if (num1 > num2)
    console.log("The first number is greater with the value of ", num1);
  else if (num2 > num1)
    console.log("The second number is greater with the value of ", num2);
  else console.log("Both numbers are equal!");
}
max(99, 4);

//MOSH SOLUTION I
let number = max(3, 3);
console.log(number);

function max(a, b) {
  if (a > b) return a;
  //We do not "really" need "else" here bcos if bcos if the "if" statement is not valid, we automatically break out of the code
  return b;
}

//MOSH SOLUTION II
let number = max(20, 9);
console.log(number);

function max(a, b) {
  return a > b ? a : b;
}
