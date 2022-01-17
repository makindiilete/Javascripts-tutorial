/*Write a function that takes a number as input.
 * If the input is divisible by 3 ==> Fizz
 * Divisible by 5 ==> BUzz
 * Divisible by both 3 and 5 ==> FizzBuzz
 * Not divisible by 3 and 5 ==> input
 * If the input is not a number ==> "Not a number"*/

//MY SOLUTION
function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else if (input % 3 && input % 5 !== 0) return input;
  else if (isNaN(input)) return "Not a number";
}
console.log(fizzBuzz("true"));

//MOSH SOLUTION
function fizzBuzz(input) {
  //  The best approach is to first check if the input is a number or not, if its NaN then we dont want to continue the execution
  if (typeof input !== "number") return "Not a number";
  //We need to move this statement that checks for both up here else it wont be called bcos once the first statement evaluates to true, "Fizz" will be returned.
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
console.log(fizzBuzz(10));

//MOSH SOLUTION II
function fizzBuzz(input) {
  //  Instead of simply returning a string "Not a number", we can simply return "NaN"
  if (typeof input !== "number") return NaN;
  //We need to move this statement that checks for both up here else it wont be called bcos once the first statement evaluates to true, "Fizz" will be returned.
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
console.log(fizzBuzz(true));
