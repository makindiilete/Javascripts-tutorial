/*Ternary can also be called conditional operator*/

// If a customer has more than 100 points,
// they are a "gold" customer, otherwise,
// they are a "silver" customer.

let points = 110; //this is the customer's points

//we start with a condition "points > gold", if this is true "?", we use "gold", otherwise, we use "silver"
let type = points > 100 ? "gold" : "silver";
console.log(type);

/*RESULTS: -
gold
*/

// If a customer has more than 100 points,
// they are a "gold" customer, otherwise,
// they are a "silver" customer.

let points = 90; //this is the customer's points

//we start with a condition "points > gold", if this is true "?", we use "gold", otherwise, we use "silver"
let type = points > 100 ? "gold" : "silver";
console.log(type);

/*RESULTS: -
silver*/
