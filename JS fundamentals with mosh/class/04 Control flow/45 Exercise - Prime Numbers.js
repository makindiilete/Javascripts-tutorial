/*Implement function to list out all the prime numbers from 0 to a given limit*/
/*We will be refactoring the code to break nested loops into two different functions. You should do this each time you have nested loops because nested loops are hard to understand.*/

//MOSH SOLUTION 1
showPrimes(5);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

//MOSH SOLUTION 2 : - REFACTORED I
showPrimes(5);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = factor(number);
    if (isPrime) console.log(number);
  }
}
function factor(number) {
  let isPrime = true;
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

//MOSH SOLUTION 3 : - REFACTORED II
showPrimes(5);

function showPrimes(limit) {
  //we loop from 2 to limit
  for (let number = 2; number <= limit; number++) {
    //if the result of the factor() is true, we log the number
    if (factor(number)) console.log(number);
  }
}
function factor(number) {
  //We use this to find if a number has other factors apart from itself and 1
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      //if the number does then we return false which means its not prime
      return false;
    }
  }
  //else we return true which means its prime or not less than number
  return true;
}

//ROUND 1. number = 2, factor = 2, limit = 5
showPrimes(5);

function showPrimes(limit) {
  //(a) we start counting from 2 bcos prime numbers starts from 2;
  //(b)if number "2" is less than or equal to the entered limit "5" which is true in ds case bcos 2 is < 5
  for (let number = 2; number <= limit; number++) {
    // (c) we then set "isPrime" to true
    let isPrime = true;
    // (d) we set factor value to 2 as well
    // (e) if factor "2" is less than number "2" which is false in ds case
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    //(f) We terminate the nested loop as 2 is not less than 2
    // (g) isPrime is still set to true bcos line 13 was not executed
    // (h) we log the number in this case "2"
    if (isPrime) console.log(number);
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//ROUND 2. number = 2, factor = 2, limit = 5
showPrimes(5);

function showPrimes(limit) {
  //(a) bcos we are on the 2nd round of the loop, we come back to the 3rd statement"number++" and increment our number "2" + 1 = "3"
  //(b) next we go to the 2nd statement and check if number "3" is less than or equal to limit "5" which is true bcos 2 is < 5
  for (let number = 2; number <= limit; number++) {
    // (c) we then set "isPrime" to true
    let isPrime = true;
    // (d) we set factor value to 2 as well
    // (e) if factor "2" is less than number "3" which is true in ds case
    // (g) because the result of 3/2 !== 0, we enter the 3rd statement and increment factor "2" + 1 = "3", we then check the 2nd statement if factor "3" is less than number "3", this is false so move out of this nested loop
    for (let factor = 2; factor < number; factor++) {
      //(f) We check if the remainder of "3" / "2" (number/factor) = 0 which is false.
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    // (h) isPrime is still set to true bcos line 16 was not executed
    // (i) we log the number in this case "3"
    if (isPrime) console.log(number);
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//ROUND 3. number = 3, factor = 2, limit = 5
showPrimes(5);

function showPrimes(limit) {
  //(a) bcos we are on the 3rd round of the loop, we come back to the 3rd statement"number++" and increment our number "3" + 1 = "4"
  //(b) next we go to the 2nd statement and check if number "4" is less than or equal to limit "5" which is true bcos 4 is < 5
  for (let number = 2; number <= limit; number++) {
    // (c) we then set "isPrime" to true
    let isPrime = true;
    // (d) we set factor value to 2 as well
    // (e) if factor "2" is less than number "4" which is true in ds case
    for (let factor = 2; factor < number; factor++) {
      //(f) We check if the remainder of "4" / "2" (number/factor) = 0 which is true.
      if (number % factor === 0) {
        // (g) Because 4 divided 2 without a remainder, we execute this line and set "isPrime" to false
        isPrime = false;
        // (h) we break out of the nested loop
        break;
      }
    }
    // (i) we check if "isPrime" is true, but we have set "isPrime" to false so we cannot log the number "4"
    if (isPrime) console.log(number);
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//ROUND 4. number = 4, factor = 2, limit = 5
showPrimes(5);

function showPrimes(limit) {
  //[1] bcos we are on the 4th round of the loop, we come back to the 3rd statement"number++" and increment our number "4" + 1 = "5"
  //[2] next we go to the 2nd statement and check if number "5" is less than or equal to limit "5" which is true bcos 5 = 5
  // [14] we go to 3rd statement and increment number "5" by 1 = 6
  // [15] we go to the 2nd statement and check if number "6" is less than limit "5", this is false so the function ends.
  for (let number = 2; number <= limit; number++) {
    // [3] we then set "isPrime" to true
    let isPrime = true;
    // [4] we set factor value to 2 as well
    // [5] if factor "2" is less than number "5" which is true in ds case
    // [7] Because the result of 5/2 !== 0 (line 21), we enter the 3rd statement and increment factor by 1 : "2" + 1 = "3". The we enter the 2nd statement and check if factor "3" is less than number "5" which is true
    // [9] Because the result of 5/3 !== 0 (line 21), we enter the 3rd statement and we increment factor by 1 :  "3" + 1 = "4". The we enter the 2nd statement and check if factor "4" is less than number "5" which is true
    // [11] Because the result of 5/4 !== 0 (line 21), we enter the 3rd statement and we increment factor by 1 :  "4" + 1 = "5", then we move to 2nd statement to check if "5" is less than 5 which is false so we terminate the nested loop.
    for (let factor = 2; factor < number; factor++) {
      //[6] We check if the remainder of "5" / "2" (number/factor) = 0 which is false.
      // [8] We check if the remainder of "5" / "3" (number/factor) = 0 which is false.
      // [10] We check if the remainder of "5" / "4" (number/factor) = 0 which is false.
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    // [12] because so far line 20 has not been executed, isPrime is still true,
    // [13] We log 5 to the console
    if (isPrime) console.log(number);
  }
}
