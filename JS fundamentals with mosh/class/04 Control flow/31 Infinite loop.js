/*When writing loops, you need to be aware of infinite loop, an infinite loop executes forever, so if you accidentally creates one of this loops, you will crash your browser of computer.
 */

//Here this loop will be executed forever because we fail to increment the variable "i" and so "0' which is the first variable will keep printing repeatedly because the condition "while i is less than 5" is always true

//INFINITE WHILE LOOP
let i = 0;
while (i < 5) {
  console.log(i);
  //i++
}

//INFINITE DO...WHILE LOOP
let i = 0;
do {
  //console.log(i)
} while (i < 5);

//INFINITE FOR LOOP
for (let i = 0; i > 0; i++) {
  //console.log(i)
}

//OR
for (let i = 0; i < 5; ) {
  //console.log(i)
}
