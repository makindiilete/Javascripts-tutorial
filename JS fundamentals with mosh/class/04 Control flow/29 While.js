/*One key difference between a "For" loop and a "While" loop is that in "For" loop, the loop variable "let i = 0" is part of the loop itself but in "While" loop, we have to declare this variable externally.*/

//we declare the loop variable externally
let i = 0;
//we add "while" and in () we declare the condition
while (i <= 5) {
  //    and in here we add our statement
  if (i % 2 !== 0) console.log(i);
  i++;
}

/*So the js start by checking the loop variable and then it checks the while condition and as long as it remains true, it executes the statements*/
