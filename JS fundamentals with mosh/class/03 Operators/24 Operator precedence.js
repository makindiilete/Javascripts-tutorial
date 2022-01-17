/*When working with mathematical expression, one thing you should be aware of is the precedence*/

let x = 2 + 3 * 4;
console.log(x); //here we get 14 even though plus comes before *..This is bcos multiplication takes precedence over addition

//So in other to solve the addition first, we can place the addition inside a bracket

let x = (2 + 3) * 4;
console.log(x); //Now we get 20 bcos the addition is now inside bracket and that takes precedence over multiplication
