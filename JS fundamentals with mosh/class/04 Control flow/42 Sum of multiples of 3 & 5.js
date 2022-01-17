/*Implement a function that takes a limit "number" this function will calculate the sum of all the multiples of 3 and 5 starting from 0 up till this limit.*/

//MY SOLUTION 1

function sum(limit) {
  let sumOfMultiple3 = 0;
  for (let i = 1; i <= limit; i++) if (i % 3 === 0) sumOfMultiple3 += i;

  let sumOfMultiple5 = 0;
  for (let i = 1; i <= limit; i++) if (i % 5 === 0) sumOfMultiple5 += i;
  console.log(
    `Total sum of the multiples of 3 and 5 from 0 to ${limit} = ${sumOfMultiple5 +
      sumOfMultiple3}`
  );
}
sum(15);

//RESULT: Total sum of the multiples of 3 and 5 from 0 to 15 = 75...This supposed to be 60.

//MY SOLUTION 2

function multiple3(limit) {
  for (let i = 1; i <= limit; i++)
    if (i % 3 === 0)
      console.log(`Multiples of 3 from 0 to ${limit} are : - ${i}`);
}
function multiple5(limit) {
  for (let i = 1; i <= limit; i++)
    if (i % 5 === 0)
      console.log(`Multiples of 5 from 0 to ${limit} are : - ${i}`);
}

function sum(limit) {
  let sumOfMultiple3 = 0;
  for (let i = 1; i <= limit; i++) if (i % 3 === 0) sumOfMultiple3 += i;

  let sumOfMultiple5 = 0;
  for (let i = 1; i <= limit; i++) if (i % 5 === 0) sumOfMultiple5 += i;
  console.log(
    `Total sum of the multiples of 3 and 5 from 0 to ${limit} = ${sumOfMultiple5 +
      sumOfMultiple3}`
  );
}
multiple3(10);
multiple5(10);
sum(10);

/*RESULT: -
Multiples of 3 from 0 to 10 are : - 3
Multiples of 3 from 0 to 10 are : - 6
Multiples of 3 from 0 to 10 are : - 9
Multiples of 5 from 0 to 10 are : - 5
Multiples of 5 from 0 to 10 are : - 10
Total sum of the multiples of 3 and 5 from 0 to 10 = 33
 */

//MOSH SOLUTION
function sum(limit) {
  let multiplesSum = 0;
  for (let i = 1; i <= limit; i++)
    //if a number can be divisible by both 3 and 5 then its d number are looking for
    if (i % 3 === 0 || i % 5 === 0) multiplesSum += i;
  console.log(multiplesSum);
}
sum(15);

//RESULT : - 60
