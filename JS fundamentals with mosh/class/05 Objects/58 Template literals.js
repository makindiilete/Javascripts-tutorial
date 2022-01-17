/*In the last lecture, we learnt that \n adds a new line to a string but the approach is not that good because it does not allows us visualise what the output looks like but the string in our code looks different...Template literals allows us to write cleaner code*/

const another = `This is my
first message`;
console.log(another);

/*RESULT : -
This is my
first message
*/

const another = `Hi John,
    Thank you for joining my mailing list.
    Regards,
    Mosh`;
console.log(another);
/*RESULT : -
Hi John,
    Thank you for joining my mailing list.
    Regards,
    Mosh

    So this makes formatting easy, we can format our code the way we want our output to look like
*/

//Using template literals to call variables dynamically
const name = "John";
const another = `Hi ${name}`;
console.log(another);

//RESULT : - Hi John

//We can add any expression that produces a value in between the {}
const name = "John";
const another = `Hi ${name} ${2 + 3}`;
console.log(another);

//RESULT : - Hi John 5

//Calling a function that returns a value
const name = "John";
const another = `Hi ${name} ${2 + 3} with function =  ${function() {
  console.log("Function John");
}}`;
console.log(another);

/*RESULT : -
Hi John 5 with function =  function() {
  console.log("Function John");
}
*/
