/*Create an address object with 3 properties :  Street, city and zipcode...
 * Then create a function called "Show Address" that takes an address object and displays all the properties in this object along with their value.*/

//MY SOLUTION
const address = {
  street: "No 5, Araromi St.",
  city: "Ibeju",
  zipCode: 234
};

function showAddress(address) {
  console.log(address);
}
showAddress(address);

//RESULT : - { street: 'No 5, Araromi St.', city: 'Ibeju', zipCode: 234 }
//My solution does not answer the question because here we returning the complete objects....The solution is suppose to only enumerate the properties inside the objects with their value and not to return the object

//MOSH SOLUTION
const address = {
  street: "No 5, Araromi St.",
  city: "Ibeju",
  zipCode: 234
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}
showAddress(address);

/*RESULT : -

street No 5, Araromi St.
city Ibeju
zipCode 234

*/
