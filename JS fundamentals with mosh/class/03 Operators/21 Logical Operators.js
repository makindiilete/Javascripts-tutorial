/*We use this operator to make decision based on multiple conditions : In JS we have three types of logical operators : -

AND &&
OR ||
NOT !
*/

//Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); //both sides are true so it returns true
console.log(true && false); //both sides are not true so it returns false
console.log(false && false); //both sides are false, so it returns false

//Let us examine using this in a real world scenario of a loan app. We want to check that the applicants has a high income and a good credit score and then we return true

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

//RESULT : - "true"

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan); //this returns true as both variables are true

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan); //this returns true as the value of one of the operands is set to true

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("The eligibility of this customer is ", eligibleForLoan);

//Logical NOT (!)
//If the applicant is not eligible for loan, we want to consider the application as refused. In this case, the not operator will convert the "eligibleForLoan" variable to the opposite of whatever the value is...If its set to true, NOT will set it to false, if it is set to false, NOT will set it to true.

// So if the applicant eligibility is valid "true", we dont want to refused the application so the NOT operator will set "applicationRefused" to "false", else if applicant eligibility is invalid "false", we dont want to continue with the application so we set the "applicationRefused" status to "true"
let applicationRefused = !eligibleForLoan;
console.log("Loan refused? ", applicationRefused);
