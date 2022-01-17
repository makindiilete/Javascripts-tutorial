/*The "this" keyword is one of the javascript concept that confuses alot of developer out there.

"this" : - "this" references an object that is executing the current function

1) If the current function is part of an object, we call the function a method and in that scenario, "this" represents the object itself.

2) If the function is a regular function and not part of an object, "this" represents the global object (window object in browser, global object in node).

3) In a constructor function, this returns a new object because the "new" keyword creates a new object and set "this" in this constructor function to point to this object.
*/

//EXAMPLES OF "this" in a method

const video = {
  title: "a",
  //  play "method" in "video" object
  play() {
    console.log(this);
  }
};

video.play(); //RESULT : - { title: 'a', play: [Function: play] }

//Example 2

const video = {
  title: "a",
  play() {
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
};
video.stop(); //RESULT : - { title: 'a', play: [Function: play], stop: [Function] }

//EXAMPLE OF "this" in a regular function

function playVideo() {
  console.log(this);
}
playVideo(); //RESULT : - returns window/global object

//"this" in a constructor function
function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video("c"); //RESULT : - Video { title: 'c' }

/*In a constructor function, this returns a new object because the "new" keyword creates a new object and set "this" in this constructor function to point to this object.*/

// FURTHER EXAMPLE OF "this" IN A METHOD
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(tag);
    });
  }
};

video.showTags(); //RESULT : - a, b, c

//Let us assume we want to show title next to each tags, we can do something below.

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function(tag) {
      //displaying title next to each tag
      console.log(this.title, tag);
    });
  }
};

video.showTags();

/*RESULT
undefined 'a'
undefined 'b'
undefined 'c'

Funny enough we get undefined as title...So we can inspect what "this" is ref here

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this, tag);
    });
  }
};

video.showTags();

//RESULT : - Surprisingly, "this" is ref the window object which looks surprising because we are inside an object and "this" should be referencing that object but if we look closely we will see that we are actually inside a callback function : -

showTags() {
    //callback function
    this.tags.forEach(function(tag) {
      console.log(this, tag);
    });

    And this is why this ref the window object.
    But now that this is the case, how do we get our title property?
*/

//SOLUTION : - The FOR...EACH method takes a second optional parameter "thisArg"... "thisArg" is an object to which the "this" keyword can refer in the callback function. If "thisArg" is omitted, undefined is used as the "this' value....This was why we got "undefined earlier.

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function(tag) {
        //"this" should now ref the "thisArg" object
        console.log(this, tag);
      },
      // "thisArg" parameter
      { firstName: "Michaelz" }
    );
  }
};

video.showTags();

/*RESULTS : -
{ firstName: 'Michaelz' } 'a'
{ firstName: 'Michaelz' } 'b'
{ firstName: 'Michaelz' } 'c'

BUt this is not really what we need...We need to display out title next to each tags
*/

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function(tag) {
      //we can now call "this.title" bcos we have a "thisArg" pointing to the video object
      console.log(this.title, tag);
      //  here we pass "this" as our "thisArg" and this will ref our video object bcos we are outside the callbackfn and inside the showTags method
    }, this);
  }
};

video.showTags();

/*RESULT : -
a a
a b
a c
*/

/*IT NOT ALL METHODS GIVES YOU THE ABILITY TO PASS THE "this" as optional parameter like the FOR....EACH... So we have different solution for other methods.*/
