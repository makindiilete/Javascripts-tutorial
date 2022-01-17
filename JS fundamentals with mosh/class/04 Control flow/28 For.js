/*FOR is useful when you want to repeat an action for a number of times. For example: - You want to display "Hello World" five times in the console...*/

//THE POOR IMPLEMENTATION
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

//BETTER IMPLEMENTATION
/*In JS to achieve this, we use "loops" we have different types of loops all doing the samething :
 * For
 * While
 * Do..while
 * For...in
 * For...of
 *
 * All these loops essentially do the same thing but there is a difference in how they start and end*/

//here we need 3 statements, The first is a variable where "i" is short for "index" , we set this variable to 0 and terminate the first statement

//Next is a condition, this loop will continue to run as long as this condition evaluates to true...if you want the loop to run 5 times, you compare "i" with "5", we terminate the second statement

//The next statement is the increment statement which we use to increment the value of "i" by one

for (let i = 0; i < 5; i++) console.log("Hello World!");
// Just like the if...else, after the 3 statements, we write the logic(s) we want to execute, if we have multiple, we place them inside {}

/*RESULT: -
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
*/

//SEEING WHAT IS GOING ON UNDER THE HOOD

/*At runtime, its is not all the 3 statements that get executed first before we get to the next statement which in this case is the "console.log"

//EXECUTION ORDER
1) let i = 0;   //i will be set to 0
2) i < 5;       //The value of i (0) will be checked if it is less than 0 (this is true)
3) console.log("Hello World!", i) // Because the 2nd statement is true, the 4th statement will be executed which is to log to console
4) i++        //Then we increment i from 0 to 1 and we restart the sequence from 1 to 4 until the statement in number 2 is false and we terminate the loop
*/
for (let i = 0; i < 5; i++) console.log("Hello World!", i);

/*RESULTS : -
Hello World! 0
Hello World! 1
Hello World! 2
Hello World! 3
Hello World! 4
*/

/*ANOTHER WAY TO LOG THE MSG 5 TIMES IS TO SET THE FIRST VALUE TO "1" AND THE CONDITION TO "i <= 5", this way the count will start from 1 to 5*/

for (let i = 1; i <= 5; i++) console.log("Hello World!", i);

/*RESULT : -
Hello World! 1
Hello World! 2
Hello World! 3
Hello World! 4
Hello World! 5
*/

/*We can make the code more interesting and check for the odd numbers using the division remainder operator*/

for (let i = 1; i <= 5; i++) {
  //  if the division of i by 2 is not equals to 0, that is an odd number and we log it to the console
  if (i % 2 !== 0) console.log(i);
}

/*RESULTS : -
1
3
5
*/

//DECREMENTING LOOP
//variable "i" is 5, as long as i -s greater than or equals to 1, we log the value of i to the console in decrementing form
for (let i = 5; i >= 1; i--) console.log(i);
/*RESULT : -
5
4
3
2
1
*/
