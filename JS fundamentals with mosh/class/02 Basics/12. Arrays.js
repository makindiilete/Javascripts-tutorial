/*Arrays are useful in out application when we are dealing with a list of objects/items for example : List of products in a shopping cart, list of colors the users selected. In situations like this, we use an array to store that list*/

//Declaring an array
let selectedColors = ["red", "blue", "green"];
console.log(selectedColors);

/*RESULTS : -
 (3) ["red", "blue", "green"]
0: "red"
1: "blue"
2: "green"

As you can see, each element has an index which determines the position of each element in the array. The first element has an index of 0, the 2nd has an index of 1.*/

//Accessing an element in an array : - To do this, we use the index

let selectedColors = ["red", "blue", "green"];
//Accessing the first element
console.log(selectedColors[0]);

//RESULT : - "red"

/*As we have learnt that JS is a dynamic language, this also applies to arrays, the length of an array can change at runtime, and also the type of the array elements are also dynamic.*/

let selectedColors = ["red", "blue", "green"];
//Dynamically increasing the length of the array with a new element
selectedColors[3] = "indigo";
//Dynamically changing the type of the first element
selectedColors[0] = false;
console.log(selectedColors);

/*RESULT : -
(4) [false, "blue", "green", "indigo"]
0: false
1: "blue"
2: "green"
3: "indigo"
length: 4
*/

/*Technically, an array is an objects, it has a bunch of methods and properties we can access using the dot notation. We can confirm this with the "typeof" operator

(4) [false, "blue", "green", "indigo"]
typeof selectedColors
"object"

And with the dot notation after the array name, we can view all the methods and properties we can use. This methods are not defined in the array but magically inherited from somewhere else "from their prototype"

One of the property we can use is the "length" property which returns the number of elements in an array
*/

let selectedColors = ["red", "blue", "green"];
selectedColors[3] = "indigo";
selectedColors[0] = false;
//Using the "length" property
console.log(selectedColors.length);

//RESULT : - 4
