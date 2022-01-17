/*Implement a function that takes an input e.g. 10 and list out all the numbers from 0 to the input entered and also determine if they are odd or even*/

//MY SOLUTION
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++)
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
}
showNumbers(10);

/*RESULTS : -
0 'EVEN'
1 'ODD'
2 'EVEN'
3 'ODD'
4 'EVEN'
5 'ODD'
6 'EVEN'
7 'ODD'
8 'EVEN'
9 'ODD'
10 'EVEN'
*/

//MOSH SOLUTION I
showNumbers(10);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++)
    if (i % 2 === 0) console.log(i, "EVEN");
    else console.log(i, "ODD");
}

//MOSH SOLUTION II
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    //  to get rid of the double console.log statement, we set a constant with a ternary operator that automatically calculates the msg that is returned
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
showNumbers(10);
