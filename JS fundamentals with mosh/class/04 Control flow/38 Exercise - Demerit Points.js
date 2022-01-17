/*Implement this function below*/

//Speed Limit = 70
// For every 5 above 70 , we return "Point - 1". i.e. 75 = Point - 1, 80 = Point - 2
//You will need to use "Math.floor(input)"
//Once a driver has a total of 12points and above i.e. any speed from >= 130, we return the msg "Licence suspended"

checkSpeed(180);

function checkSpeed(speed) {}

//MY SOLUTION
//Speed Limit = 70
// For every 5 above 70 , we return "Point - 1". i.e. 75 = Point - 1, 80 = Point - 2
//You will need to use "Math.floor(input)"
//Once a driver has a total of 12points and above i.e. any speed from >= 130, we return the msg "Licence suspended"

console.log(checkSpeed(71));

function checkSpeed(speed) {
  //  we set a variable for the limit
  let limit = 70;
  // Here we derive the formula to determine our points : 75 speed will be, (75 - 70) / 5 = 1 (Point - 1)
  let point = Math.floor((speed - limit) / 5);
  //If total point is equals to or above 12
  if (point >= 12) return "Your Licence is hereby Suspended!";
  //if speed is 70 or less or greater than 70 but less than 75 (which is where we want to start counting for point)
  if (speed <= limit || speed < 75) return "OK";
  //if speed is greater than 70 but less than 12 point
  if (speed > limit) return "Point - " + point;
}

//MOSH SOLUTION I
console.log(checkSpeed(71));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  //if the speed is less than (70 + 5)
  if (speed < speedLimit + kmPerPoint) console.log("OK");
  else {
    //"Math.floor" rounds of point to nearest integer
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended!");
    else console.log("Points", points);
  }
}

//MOSH SOLUTION II - REFACTOR
console.log(checkSpeed(71));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  //if the speed is less than (70 + 5)
  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  //"Math.floor" rounds of point to nearest integer
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended!");
  else console.log("Points", points);
}
