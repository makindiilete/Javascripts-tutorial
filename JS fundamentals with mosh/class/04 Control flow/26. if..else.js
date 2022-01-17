/*In the last section, we learnt about expressions and operators. In this section we will use this expression and operators along with conditional statements to implement interactivity in our application.

In JS, we have two types of conditional statememts

IF...ELSE
SWITCH...CASE

We will examine if...else now

Imagine in our app, we want to get the current hour and depending on the value of the current hour, we are going the greet the user with a different msg
*/

//SYNTAX

//if you only have one statement then we dont need {}
if (condition) statement;

//We use {} to surround multiple statements
if (condition) {
    multiple statements
}
else if (anotherCondition) {
    multiple Statements
}
else if (yetAnotherCondition) {
    multiple Statements
}
//if all condition fails
else
    statement


//Hour
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otherwise: Good evening!

//here we want to hardcode the hour and not worry about auto generating it for now
let hour = 10;
//if the hour is greater than or equals to 6 and also less than 12
if (hour >= 6 && hour < 12) console.log("Good Morning!");
//else if our hour is greater than or equals to 12 and less than 6pm (18:00)
else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
//Anything from 6pm above will be truthy for other scenario
else console.log("Good Evening");
