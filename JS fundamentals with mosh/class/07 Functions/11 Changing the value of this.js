/*We have learnt that "this" represent an object that is executing the current "callback" function....
Now lets examine few different solutions to change the value of "this" in a function*/

/*CHANGING THIS IN A REGULAR FUNCTION*/

//APPROACH 1
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    //bcos we have no "thisArg" parameter, we can define a const here and set the value to "this" before calling the callbackfn..."self" is referencing the video object
    const self = this;
    this.tags.forEach(function(tag) {
      //here we can use "self" instead of "this"
      console.log(self.title, tag);
      //  we do not have "thisArg" here to point to this so this sud return undefined
    });
  }
};

video.showTags();

/*RESULT : -
a a
a b
a c

This is not the preferred approach but you see it in a lot of javascript applications out there but do not use it
*/

//APPROACH 2 (we have learnt that functions are technically objects in js)

function playVideo() {
  console.log(this);
}
//the regular function here is an object with ds call method & ds call method takes the "thisArgs" argument.."thisArgs" here ref the object to be used as the current object.
playVideo.call({ name: "Mosh" }); //RESULT : - { name: 'Mosh' }
//apply method works the same way with the only difference in passing arguments
playVideo.apply({ name: "Mosh" }); //RESULT : - { name: 'Mosh' }
playVideo(); //RESULT : - window object

//DIFFERENCE BETWEEN CALL & APPLY METHOD
/*
With call method, if we have multiple parameters, the call() can accept them normally when calling the function but with apply, we will need to pass those parameters as an array

function f(a, b) {}
f.call(1, 2);
f.apply([1,2];
*/

//BIND METHOD
function playVideo() {
  console.log(this);
}
playVideo.call({ name: "Mosh" });
playVideo.apply({ name: "Mosh" });
//"bind()" does not point to our function, it returns a new function and in that function, it set "this" to ref the object passed here permanently no matter how we call the function
const fn = playVideo.bind({ name: "Mosh" });
fn();

playVideo();

// OR

function playVideo() {
  console.log(this);
}
playVideo.call({ name: "Mosh" });
playVideo.apply({ name: "Mosh" });
//"bind()" does not point to our function, it returns a new function and in that function, it set "this" to ref the object passed here permanently no matter how we call the function
playVideo.bind({ name: "Mosh" })();

playVideo();

/*RESULT : -
{ name: 'Mosh' }
{ name: 'Mosh' }
{ name: 'Mosh' }
Object [global] {}

So with "call, apply & bind", we can see the "this" argument for a given function...
*/

/*CHANGING "this" IN AN OBJECT*/

//SOLUTION 1 : - BIND METHOD

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function(tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  }
};

video.showTags();

/*RESULT
a a
a b
a c
*/

//SOLUTION 2 : - ARROW FUNCTION
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(tag => console.log(this.title, tag));
  }
};

video.showTags();

/*This all we need to do..Just with arrow function, our "this" points to the video object even inside a callback function..*/
