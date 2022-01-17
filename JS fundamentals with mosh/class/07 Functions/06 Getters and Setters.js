/*We will look a special kind of methods in objects called "getters and setters"...
 * Assume we have a person object with firstname and lastname and we want to use the 2 properties to display the full name, we will do something like ds*/

const person = {
  firstName: "Mosh",
  lastName: "Hamedani"
};
console.log(`${person.firstName} ${person.lastName}`);
/*Code like ds is ugly especially if we have multiple places in our app where we want ti use the full name... there is a better approach is this*/

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};
console.log(person.fullName());

/*There is still a couple of problems with this approach

1) We cannot set the value of "fullName" outside the function so it is read only

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};
//fullname is a read-only function so we cannot set its value outside the function
person.fullName = "John Smith";
console.log(person.fullName());

2) It will be better if we can call the "fullName" as a property and not as a method that is using "console.log(person.fullName)" instead of "console.log(person.fullName()).

Solving this two problems is where getters and setters comes into picture
*/

/*
GETTERS => To access properties in an object
SETTERS => To change the properties.

So we can add a getter to get the "fullName" as a property and with setter we can set its value from the outside
*/

//SOLVING PROBLEM TWO (changing the fullName function to a property) and calling it as a property

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};
console.log(person.fullName); //Mosh Hamedani

//SOLVING PROBLEM ONE : - Setting the property value outside the function

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  //  GETTER returning the fullName as property
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  //  SETTER taking "value" parameter
  set fullName(value) {
    //  we split the value
    const parts = value.split(" ");
    //we pick the first element in the array as firstName
    this.firstName = parts[0];
    //we pick the second element in the array as lastName
    this.lastName = parts[1];
  }
};
//Here we pass a string which stands for the "value" parameter inside the setter.
//Since we need to form 2 properties out of this single string then we need to split using the split() method it into array and pick each array element with its index and set to first and lastName
person.fullName = "John Smith";
console.log(person);

/*RESULT : =
{firstName: "John", lastName: "Smith"}
firstName: "John"
fullName: "John Smith"
lastName: "Smith"
get fullName: ƒ fullName()
set fullName: ƒ fullName(value)
*/
