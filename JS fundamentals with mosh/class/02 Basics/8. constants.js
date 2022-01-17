/*We use constants when we do not want the value of a variable to change. For example in situation where changing the value may cause bugs.

So the value of a variable "let" can change, but the value of a constant "const" cannot be changed.

If we try to change the value of a constant as we did below, we will surely get runtime error of :

"TypeError: Assignment to constant variable.
    at index.js:2"
    */

const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
