/*Reducing an array simple means reducing all the elements into one number maybe by mathematical operation like addition, multiplication etc....

Let us say we want to calculate the total sum of all the elements in the array, this is similar to calculating the total price of a shopping cart....In this array, we can say each element is the price of each items*/

//Addition
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) sum = sum += n;

console.log(sum); //RESULT : - 5

//MORE ELEGANT WAY
const numbers = [1, -1, 2, 3];

//reduce() method :  Takes 3 parameter, "accumulator" is the sum variable we set to 0. "currentValue" this represents one element in the array and the method will loop tru d array setting each element to th "currentValue" parameter and adding it to the "accumulator" and the last parameter "0" this can be any number which will represent the initial value of the accumulator
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); //RESULT =  5

//WHAT HAPPENS UNDER THE HOOD

const numbers = [1, -1, 2, 3];

//What happens under the hood

// a = 0 , c = 1 => a = 1
// a = 1 , c = -1 => a = 0
// a = 0 , c = 2 => a = 2
// a = 2 , c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

/*If you do not supply the 3rd parameter, the initial value of the accumulator will be set to the first element in the array in this case that is "1"..

Let us see this in action while also refactoring our function keyword.*/

const numbers = [1, -1, 2, 3];

//What happens under the hood

// a = 0 , c = 1 => a = 1
// a = 1 , c = -1 => a = 0
// a = 0 , c = 2 => a = 2
// a = 2 , c = 3 => a = 5
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
