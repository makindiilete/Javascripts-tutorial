/*Implement this function and return true or false if the image is landscape of portrait.*/

//MY SOLUTION
let result = isLandscape(100, 50);
console.log(result);
function isLandscape(width, height) {
  return width > height ? true : false;
}

//WEBSTORM SUGGESTED SOLUTION
let result = isLandscape(100, 50);
console.log(result);
function isLandscape(width, height) {
  return width > height;
}

//MOSH SOLUTION
console.log(isLandscape(800, 600));
function isLandscape(width, height) {
  //  no need for "?true:false;" because if width is greater than height, the result of these expression will be "true" otherwise it is "false"..So including "true & false" in the statement is very amateurish
  return width > height;
}
