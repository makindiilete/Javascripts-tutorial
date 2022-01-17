/*Adding an element into an array*/

const numbers = [3, 4];

//Adding element at the end of an array
numbers.push(5, 6);

//Adding element at the end of an array
numbers.unshift(1, 2);

//Adding number at the middle : This takes three arguments = first is the index number where you want to insert the new items, second is how many elements you want to remove from that index, 3rd is the item(s) you want to add
numbers.splice(2, 0, "a", "b");

console.log(numbers);
