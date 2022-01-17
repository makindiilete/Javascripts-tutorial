/*Implement a function that takes an array of marks and find the average of all the marks and return a grade for the average sum

1-59 = F
60-69 = D
70-79 = C
80-89 = B
90-100 = A
*/

//MY SOLUTION

function calculateGrade(marks) {
  let score = 0;
  for (let value of marks) score += value;
  if (score / marks.length <= 59) return "F";
  if (score / marks.length === 60 || score / marks.length <= 69) return "D";
  if (score / marks.length === 70 || score / marks.length <= 79) return "C";
  if (score / marks.length === 80 || score / marks.length <= 89) return "B";
  if (score / marks.length === 90 || score / marks.length <= 100) return "A";
  else return "Total Mark Cannot be greater than 100!";
}

const marks = [80, 40, 60, 54, 66];
console.log(calculateGrade(marks));

//RESULT : - D

//MOSH SOLUTION 1

function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;
  let average = sum / marks.length;
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

const marks = [80, 40, 60, 54, 66];
console.log(calculateGrade(marks));

//RESULT : - D

//MOSH SOLUTION 2
/*We can make this code simpler by separating concerns. In the calculateGrade function, we are basically doing two things : - Calculating the average score & Determining the grade. We can extract this into smaller functions thus making our code cleaner*/

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

const marks = [80, 40, 60, 54, 66];
console.log(calculateGrade(marks));
