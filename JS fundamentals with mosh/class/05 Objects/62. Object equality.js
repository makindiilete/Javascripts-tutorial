/*Using the constructor function we createad in the last exercise: -
1) Create two new objects "address1 & address2"
2) Create a function "areEqual" to check if the two objects are equal i.e. They are having the same properties
3) If all the properties of the two objects are equal, the function should return "true" otherwise it should return "false"
4) Create another function to check if the two objects are the same, that is if they are both referencing the same object in memory

*/

//Constructor function
function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address1 = new ShowAddress("No 5 Araromi", "Ibeju", 234);
const address2 = new ShowAddress("No 5 Araromi", "Ibeju", 234);
const address3 = address1;

console.log(`Are they equal? ${areEqual(address1, address2)}`);
console.log(`Are they the same? ${areSame(address1, address2)}`);
console.log(`Are they the same? ${areSame(address1, address3)}`);

//Checking if the two objects are equal i.e. They are having the same properties
function areEqual(obj1, obj2) {
  return (
    obj1.street === obj2.street &&
    obj1.city === obj2.city &&
    obj1.zipCode === obj2.zipCode
  );
}

//Checking if the two objects are the same
function areSame(obj1, obj2) {
  return obj1 === obj2;
}

/*
RESULTS : -

Are they equal? true
Are they the same? false
Are they the same? true

The question was actually wrong because the solution we have here : -
function "areEqual" is actually checking if the value of the properties of the two objects are the same instead of checking if the property keys are the same...If we should change the street inside "address2" to "Agbow Ibadan", the function will return "false" which is not true if truly we are cheking their keys (properties) and not the values.

The second question and solution is actually right because it checks if both objects passed are pointing to the same variable which is true for "address1 & address3" but false for "address1 & address2"
*/

//THE CORRECT SOLUTION TO THE QUESTION

//Constructor function
function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
//We declare "address1" object having "street, city and zipCode"
const address1 = new ShowAddress("No 5 Araromi", "Ibeju", 234);
//We declare "address1" object having "only street and zipCode"
const address2 = new ShowAddress("No 5 Araromi", 234);
const address3 = address1;

console.log(`Are they equal? ${areEqual(address1, address2)}`);
console.log(`Are they the same? ${areSame(address1, address2)}`);
console.log(`Are they the same? ${areSame(address1, address3)}`);

//Checking if the two objects are equal i.e. They are having the same properties
function areEqual(obj1, obj2) {
  return (
    obj1.street !== undefined &&
    obj2.street !== undefined &&
    obj1.city !== undefined &&
    obj2.city !== undefined &&
    obj1.zipCode !== undefined &&
    obj2.zipCode !== undefined
  );
}

//Checking if the two objects are the same
function areSame(obj1, obj2) {
  return obj1 === obj2;
}

/*RESULT : -
Are they equal? false //we get false here bcos in obj2, zipcode is undefined and in obj1, zipcode is not undefined.
Are they the same? false //we get false here bcos obj1 and obj2 are declared ad two different object
Are they the same? true // we get true here bcos obj1 and obj2 (address 1 & address3) are referencing the same object
*/

//FACTORY FUNCTION SHOWING THE SOLUTION CLEARLY AND BETTER
//Constructor function
function showAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}
//We declare "address1" object having "street, city and zipCode"
const address1 = showAddress("No 5 Araromi", "Ibeju", 234);
//We declare "address1" object having "only street and city"
const address2 = showAddress("No 5 Araromi", "Ibeju");
const address3 = address1;

console.log(`Are they equal? ${areEqual(address1, address2)}`);
console.log(`Are they the same? ${areSame(address1, address2)}`);
console.log(`Are they the same? ${areSame(address1, address3)}`);

//Checking if the two objects are equal i.e. They are having the same properties
function areEqual(obj1, obj2) {
  return (
    obj1.street !== undefined &&
    obj2.street !== undefined &&
    obj1.city !== undefined &&
    obj2.city !== undefined &&
    obj1.zipCode !== undefined &&
    obj2.zipCode !== undefined
  );
}

//Checking if the two objects are the same
function areSame(obj1, obj2) {
  return obj1 === obj2;
}
