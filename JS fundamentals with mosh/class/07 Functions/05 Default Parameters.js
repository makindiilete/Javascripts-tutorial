/*There are times when you want to set default values to the parameter of a function....*/

function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 3.5, 5));

/*RESULT : - 1750

What if we want to have a default value for the rate and number of years? We can use the logical or operator to give a variable a default value*/

function interest(principal, rate, years) {
  //if rate arg is passed, dt will be used else we use 3.5
  rate = rate || 3.5;
  //if years arg is passed, dt will be used else we use 5
  years = years || 5;
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000)); //This returns the same result

//ES6 CLEANER WAY OF SETTING DEFAULT PARAMETERS

function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000)); //This also returns the same result

/*The only thing with setting a default value inside the parameter () is that : Once you set a parameter with default value, all other parameters after it must also have a default value.... let us see what happen if we set a default parameter for rate and not for years after it*/

function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000)); //RESULT IS NaN because now we dont have a value for the year inside the parameter and neither have we supplied in the arguments....

//If we try to supply it in the arguments, this will confuse the JS Engine bcos it wont know if it should use the value for rate or year since rate comes first before year. So we still get NaN bcos the number supplied in the arguments will be used for rate and year is still NaN....

//SOLUTION ; - We can pass "undefined" as the rate and set a number after it for the year

function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, undefined, 5)); //RESULT : 1750

/*But code like this not clean because setting an argument to undefined might leave the user confusd...So the best practice is to always supply the default value to the last parameter on the list else, you give all other parameters after it a default value*/
