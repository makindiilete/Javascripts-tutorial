//A role for the current user, we want to get if the user is a moderator, guest or admin... We can easily use if and else for this but there is another way to implement this with Switch....Case

let role;

//in IF...ELSE, here we add (condition), but here we add a variable
switch (role) {
  //then we add one or more case statements here, each statements here is use to compare the value of this variable "role" with something.
  //    if the value of "role" variable is "guest", this statement will be executed.
  case "guest":
    console.log("Guest User");
    //    we need this to break way from this statement, otherwise other statement below this will get executed as well if the case is truthy
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  //    if none of this statements are matched, here we can have a default statement
  default:
    console.log("Unknown Role");
  //    here we do not need a break under the default case
}

/*RESULT : -

Unknown User

Here we get unknown user in the console because we didnt set any value for the "role" variable so it is not a "guest" or "moderator"
*/

//A role for the current user, we want to get if the user is a moderator, guest or admin... We can easily use if and else for this but there is another way to implement this with Switch....Case

let role = "guest";

//in IF...ELSE, here we add (condition), but here we add a variable
switch (role) {
  //then we add one or more case statements here, each statements here is use to compare the value of this variable "role" with something.
  //    if the value of "role" variable is "guest", this statement will be executed.
  case "guest":
    console.log("Guest User");
    //    we need this to break way from this statement, otherwise other statement below this will get executed as well if the case is truthy
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  //    if none of this statements are matched, here we can have a default statement
  default:
    console.log("Unknown Role");
  //    here we do not need a break under the default case
}

//RESULT : - Guest User

//A role for the current user, we want to get if the user is a moderator, guest or admin... We can easily use if and else for this but there is another way to implement this with Switch....Case

let role = "moderator";

//in IF...ELSE, here we add (condition), but here we add a variable
switch (role) {
  //then we add one or more case statements here, each statements here is use to compare the value of this variable "role" with something.
  //    if the value of "role" variable is "guest", this statement will be executed.
  case "guest":
    console.log("Guest User");
    //    we need this to break way from this statement, otherwise other statement below this will get executed as well if the case is truthy
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  //    if none of this statements are matched, here we can have a default statement
  default:
    console.log("Unknown Role");
  //    here we do not need a break under the default case
}

//RESULT : - Moderator User.

/*TAKE AWAY : -  With Switch...Case, we can compare the value of a given variable against other values. There type can be any type.*/

//IMPLEMENTING THE SAME LOGIC WITH IF....ELSE

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");

/*As you can see, if...else is more straightforward and cleaner than switch....case. So which should you use? In Mosh Hamedani opinion, Switch....Case looks a little bit outdated and ugly but there is nothing terribly wrong with them, it all boils down to your personal preference.*/
