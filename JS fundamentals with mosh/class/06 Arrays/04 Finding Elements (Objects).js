/*In the last lecture we talked about the fact that finding primitive is different from finding reference types...Let us see way*/

const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];
//Here we are using the same method we use to find primitive type to search the array if the object "{ id: 1, name: "a" }" is included in the array
console.log(courses.includes({ id: 1, name: "a" })); //Surprisingly we get "false" even though the element exist in the array.

/*This is because as we have learnt that in reference type, two different objects having the same keyvalue pairs are not the same in memory, they are actually two separate object in memory so once we passed the object "{ id: 1, name: "a" }" in the search, this is a new object entirely we are trying to search for.*/

//FINDING OBJECTS IN AN ARRAY THE RIGHT WAY
const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];

//Using the "find" method to find an object in an array
//The find() method returns the value of the "first element" in the array that satisfies the provided testing "function" otherwise "undefined" is returned

const found = courses.find(function(course) {
  //  Here we checking the array to find any of the objects having the value of its "name" property set to "a"
  return course.name === "a";
});
console.log(found); //Result : - { id: 1, name: 'a' }

//FINDING OBJECT THAT DOES NOT EXSIT IN AN ARRAY
const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];

const found = courses.find(function(course) {
  //  Here we checking the array to find any of the objects having the value of its "name" property set to "xyz"
  return course.name === "xyz";
});
console.log(found); //Result : - undefined

//WE CAN ALSO RETURN THE INDEX OF THE FIRST OCCURRENCE OF THE OBJECT INSTEAD OF RETURNING THE OBJECT
const courses = [{ id: 1, name: "a" }, { id: 2, name: "b" }];

//Using the "findIndex" method to find the index of an object in an array
//The findIndex() method returns the index of the "first element" in the array that satisfies the provided testing "function" otherwise -1 is returned

const found = courses.findIndex(function(course) {
  //  Here we checking the array to find the index of the object in the array that has the value of its "name" property set to "a"...
  return course.name === "a";
});
console.log(found); //Result : - 0

//SELF ASSIGNMENT

const names = [
  { id: 1, name: "Michaelz" },
  { id: 2, name: "Mayowa" },
  { id: 3, name: "Damilola" },
  { id: 4, name: "Adedayo" }
];

//Looking for the object that has its name property set to "Michaelz"
const found = names.find(function(element) {
  return element.name === "Michaelz";
});

console.log(found); //Expected output = { id: 1, name: 'Michaelz' }

//2
const names = [
  { id: 1, name: "Michaelz" },
  { id: 2, name: "Mayowa" },
  { id: 3, name: "Damilola" },
  { id: 4, name: "Adedayo" }
];

//Looking for the index of the object that has its name property set to "Damilola"
const found = names.findIndex(function(element) {
  return element.name === "Damilola";
});

console.log(found); //Expected Output = 2
