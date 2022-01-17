/*In the last exercise, we use the object literal to implement an address object, so in this exercise, we are to implement an address object first with a factory function and then with a constructor function.*/

//MY SOLUTION
//Factory function
function showAddress() {
  return {
    street: "No 5, Araromi St.",
    city: "Ibeju",
    zipCode: 234
  };
  // for (let key in address) console.log(key, address[key]);
}
const address1 = showAddress();
console.log(address1);

//Constructor function
function ShowAddress() {
  this.street = "No 5, Araromi St.";
  this.city = "Ibeju";
  this.zipCode = 234;
}
const address2 = new ShowAddress();
console.log(address2);

/*RESULT : - { street: 'No 5, Araromi St.', city: 'Ibeju', zipCode: 234 }
ShowAddress { street: 'No 5, Araromi St.', city: 'Ibeju', zipCode: 234 }

THE DOWNSIDE OF MY SOLUTION IS THAT THE VALUES WHERE HARDCODED INSIDE THE FUNCTION SO WE CANNOT CREATE ANOTHER OBJECT DYNAMICALLY OUTSIDE THE FUNCTION UNLESS WE DUPLICATE IT....The values should have been passed as arguments when creating an object outside the function
*/

//MOSH SOLUTION
//Factory function
function showAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
  // for (let key in address) console.log(key, address[key]);
}
const address1 = showAddress("No 5 Araromi", "Ibeju", 234);
console.log(address1);

//Constructor function
function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const address2 = new ShowAddress("No 5 Araromi", "Ibeju", 234);
console.log(address2);

/*RESULT : -
{ street: 'No 5 Araromi', city: 'Ibeju', zipCode: 234 }
ShowAddress { street: 'No 5 Araromi', city: 'Ibeju', zipCode: 234 }
*/
