/*Another useful method of array is join()...
 With the join() method, From the array, a string will be formed by joinging all the elements of the array.*/

const numbers = [1, 2, 3];
//Here we pass a "separator(string)" which will separate the string as a parameter..In this case we separating them with a comma
const joined = numbers.join(",");
console.log(typeof joined, joined);

/*RESULTS : -
string 1,2,3
*/

/*Another method that goes hand in hand with the join() method is the split() method but the split() method is not part of array, it is part of string but let us see how it works*/

const message = "This is my first message";
//Using the Split() method to split the string into an array
const parts = message.split(" ");
console.log(parts);

//Now that the string has been slitted into an array, we using the array's join() method to join the array using an hyphen -
const combined = parts.join("-");
console.log(combined);

/*RESULT : -
[ 'This', 'is', 'my', 'first', 'message' ]
This-is-my-first-message

This Technique is particularly useful when building a url slug : - To understand this, let us take a case of a website like stakoverflow....
A user posted a question with a title "Creating arrays in Javascript" and for each question, the question title will be appended to the end of the url
The Url of this post will be  "http://stackoverflow.com/questions/9494949/THE QUESTION TITLE

But we cannot have a space in the url, so we cannot have something like :  "http://stackoverflow.com/questions/9494949/creating arrays in javascript" This is not valid so instead :

1) We turn the question title from string into an array using the "split()" method,
2) We then use the array "join()" method to join the splitted strings using an hyphen as separator...

So at the end we have "http://stackoverflow.com/questions/9494949/creating-arrays-in-javascript"

*/

//Taking the post title and splitting it into array
const message = "creating arrays in javascript";
const split = message.split(" ");

//Taking the slitted array and joining the elements with an hyphen
const join = split.join("-");
console.log(split);
console.log(join);

//Creating the url from the joined string
const url = "http://stackoverflow.com/questions/9494949/" + join;
console.log(url);

/*RESULT : -
[ 'creating', 'arrays', 'in', 'javascript' ]
creating-arrays-in-javascript
http://stackoverflow.com/questions/9494949/creating-arrays-in-javascript
*/
