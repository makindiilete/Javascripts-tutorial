/*Another object is the date object*/

//date is a constructor function because we have "new"
const now = new Date(); //this return the current date and time
const date1 = new Date("May 11 2018 09:00"); //this return the date passed
const date2 = new Date(2018, 4, 11, 9, 0); //this return 11th, May, 2018....9:00

console.log(now);
console.log(date1);
console.log(date2);

/*RESULTS : -
2019-07-10T23:54:09.240Z
2018-05-11T08:00:00.000Z
2018-05-11T08:00:00.000Z
*/

//DATE GET AND SET METHODS
//date is a constructor function because we have "new"
const now = new Date(); //this return the current date and time
const date1 = new Date("May 11 2018 09:00"); //this return the date passed
const date2 = new Date(2018, 4, 11, 9, 0); //this return 11th, May, 2018....9:00

//getters and setters
console.log(now.getFullYear());
console.log(now.setFullYear(2017));

console.log(now.toDateString()); //This converts the current date to a string
console.log(now.toTimeString()); //This converts the current time to a string
console.log(now.toISOString()); //This iso format

/*RESULTS : -
2019
1499731094256
Tue Jul 11 2017
00:58:14 GMT+0100 (West Africa Standard Time)
2017-07-10T23:58:14.256Z
*/
