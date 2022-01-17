/*Implement a function that takes number of rows and in each row, we have a number of star that is equal to the number of that row*/

/*To solve this we need to use a nested loops which is a loop inside another loop. The first parent loop will be to loop through the number of rows but since we dont want to display the loop numbers but star, we will nest another loop inside of it which will eb responsible for looping through every row and inserting stars*/

showStars(5);

function showStars(rows) {
  for (let count = 1; count <= rows; count++) {
    let pattern = "";
    for (let i = 0; i < count; i++) pattern += "*";
    console.log(pattern);
  }
}

/*RESULT : -

*
**
***
****
*****

*/
