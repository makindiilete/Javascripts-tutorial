/*Implement a function that returns only the properties of an object that are having their values set to a string*/

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

const obj = {
  title: "Mr",
  releaseYear: 2018,
  rating: 4.5,
  director: "Kunle Afolayan"
};
console.log(showProperties(obj));
