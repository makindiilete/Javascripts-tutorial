/*Error Handling in Javascript is a way for us to make sure that the values that are coming in are in the right shape so we can execute our logic.. This is called DEFENSIVE PROGRAMMING

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
//Here we are passing a boolean which is a wrong value for the split() method to handle bcos a boolean cannot be split, same thing for null and others...
person.fullName = null;
*/

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    //  Validation to make sure the value passed is a string, if the value passed to the fullname function is not a string, we terminate and return from here
    if (typeof value !== "string") return;
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
//Here we are passing a boolean which is a wrong value for the split() method to handle bcos a boolean cannot be split, same thing for null and others...
person.fullName = null;
console.log(person);

/*But sometimes we want to report an error in our application, that is when we will want to "throw an exception"*....Throwing an error is different from throwing an exception....We can declare and error object like : -
const e = new error

But the moment we throw it, it becomes an exceptional case that should not have happened "throw an exception"
 */

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    //  Validation to make sure the value passed is a string
    if (typeof value !== "string")
      //throwing an exception
      throw new Error("Value is not a string");
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
//Since this is where we calling the fullName property, this is where we handle the exception using try catch block

//We try to set the fullName to null
try {
  person.fullName = null;
} catch (e) {
  //if it fails,we catch the error using the exception we define in line 11
  console.log(e);
}
console.log(person); //RESULT : - We get an error "Value is not a string"

//WHAT IF THE USER PASS AN EMPTY STRING?

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    //  Validation to make sure the value passed is a string
    if (typeof value !== "string")
      //throwing an exception
      throw new Error("Value is not a string");
    const parts = value.split(" ");
    //here we are also validation to ensure user does not send an empty string
    if (value.length === 0) throw new Error("Enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
//Since this is where we calling the fullName property, this is where we handle the exception using try catch block

//We try to set the fullName to null
try {
  person.fullName = "";
} catch (e) {
  //if it fails,we catch the error using the exception we define in line 11
  console.log(e);
}
console.log(person); //RESULT : - "Enter a first and last name"
