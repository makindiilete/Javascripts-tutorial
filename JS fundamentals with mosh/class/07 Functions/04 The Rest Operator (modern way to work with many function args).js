/*In modern js, if you want to have a function with many number of parameters, you can use the REST OPERATOR*/

//Here we simply pass a parameter and prefix it with 3 dots jst like the "spread operator" we used for arrays but it should not be confused with the spread operator.
//With the spread operator, we can spread/supply/get all the elements in an array but when we use this inside a function parameter, we call it RES OPERATOR.
function sum(...args) {
  //logging the "args" rest operator to the console to check what it looks like
  console.log(args);
}
console.log(sum(1, 2, 3, 4, 5)); //RESULT : - [ 1, 2, 3, 4, 5 ]

/*We se that this returns an array of all supplied arguments but if we remove the "..." from the parameter then it is no longer a rest operator but a single parameter which will return only the first item in the argument*/

function sum(args) {
  console.log(args);
}
console.log(sum(1, 2, 3, 4, 5)); //RESULT : - This returns 1 because the 3 dots are removed.

/*So when we use the rest operator, we can supply many number of function arguments and the rest operator we take all of them and put them inside an array....
To get the sum of all the elements in the rest operator array, we can use the reduced method
*/

function sum(...args) {
  return args.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}
console.log(sum(1, 2, 3, 4, 5)); //RESULT : - 15

//OR

function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));

/*Imagine we want to use this function to calculate the total cost of items in a shopping cart and the function we have two parameters "discount and prices" where prices will be a rest operator of price of various items in the cart*/

function sum(discount, ...prices) {
  //  here we first calculate the sum of all items in the cart
  const total = prices.reduce((a, b) => a + b);
  // we apply the discount of 10% and remove it from the total cost
  return total - discount * total;
}
//here our discount is 0.1 which is 10%
console.log(sum(0.1, 20, 30)); //RESULT : - 45

//NO PARAMETER IS ALLOWED AFTER A REST PARAMETER/OPERATOR : - Let us examine this below

function sum(discount, ...prices, someValue) {
  const total = prices.reduce((a, b) => a + b);
  return total - discount * total;
}
console.log(sum(0.1, 20, 30, 1));

//RESULT : - In the console we get an error : - Rest parameter must be last formal parameter and this is the reason why we call it "REST", because we can have many parameter and the "rest" of all other parameters, so after the "rest" of other parameter, another parameter cannot come in
