var array = [1, 2, 3, 4];
var filter = array.filter(function(parameter) {
  return parameter > 2;
});
console.log("Original array is " + array);
console.log("Items greater than 2 are " + filter);
