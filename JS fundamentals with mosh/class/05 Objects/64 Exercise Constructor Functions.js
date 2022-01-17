/*Use a constructor function to create a post object but this constructor function is a little different from the one we created in the last exercise.*/

//MY SOLUTION
function Post(title, body, author, views, comments, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = comments;
  this.isLive = isLive;
  if (isLive === false) {
    console.log("Drafting........");
  }
}
const post1 = new Post(
  "a",
  "b",
  "c",
  "10",
  [{ author: "a", body: "b" }, { author: "c", body: "d" }],
  false
);
console.log(post1);

/*RESULT : -
Drafting........
Post {
  title: 'a',
  body: 'b',
  author: 'c',
  views: '10',
  comments: [ { author: 'a', body: 'b' }, { author: 'c', body: 'd' } ],
  isLive: false }
*/

//MOSH SOLUTION : - What the question was trying to say is that a blog post that has not been published, how will the properties looks like? That is which of the declare properties will be initialised and which ones will be falsy values e.g. An unpublished post cannot have view, comments for an unpublished post will be empty and "isLive" should be false

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
const post = new Post("a", "b", "c");
console.log(post);

/*RESULT : -
Post {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 0,
  comments: [],
  isLive: false }
  */
