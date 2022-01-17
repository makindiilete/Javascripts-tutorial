// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
console.log(a); //100
console.log(b); //200

// Rest pattern : - a => 100, b => 200, d rest items is folded into an array and assigned to the variable 'rest'
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];
console.log(rest); //[ 300, 400, 500, 600 ]

//Object
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500, f: 600 });
console.log(a); // 100
console.log(b); // 200
console.log(rest); //{ c: 300, d: 400, e: 500, f: 600 }

//Array destructuring : - LESS USEFUL
const people = ["John", "Betty", "Mike"];

// person1 => people[0], person2 => people[1], person3 => people[2]
const [person1, person2, person3] = people;

console.log(person1); // John
console.log(person2); // Betty
console.log(person3); // Mike

// Array destructuring with function
function getPeople() {
  return ["John", "Betty", "Mike"];
}

const [person4, person5, person6] = getPeople();
console.log(person4); // John
console.log(person5); // Betty
console.log(person6); // Mike

//OBJECT DESTRUCTURING : - VERY VERY USEFUL
const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
  sayHello: function () {
    console.log("Say Hello");
  },
};

//RETRIEVING VALUES FROM OBJECT KEYS

// OLD ES5
// const name = person.name,
//     age = person.age,
//     city = person.city,
//     gender = person.gender;

//NEW ES6 WAY

const { name, age, city, gender, sayHello } = person;

console.log(name, age, city, gender); // John Doe 32 Miami Male

sayHello(); //Say Hello
