/*Create a blog post object with this properties
title
body
author
views (number)
comments (each comments sud av an author and body)
isLive (boolean)

Use object literal to create and initialize the blog post
*/

//MY SOLUTION
const blogPost = {
  title: "Glo Prepaid plan",
  body: `Glo anounced bumpa data
            Get 3GB for 1k
            Get 4GB for 2k`,
  author: "Michaelz Omoakin",
  views: 23,
  comments: {
    author: "Mavins",
    body: `Wow! This is a wonderful development`
  },
  isLive: true
};
console.log(blogPost);

/*RESULT : -
{ title: 'Glo Prepaid plan',
  body:
   'Glo anounced bumpa data\n            Get 3GB for 1k\n            Get 4GB for 2k',
  author: 'Michaelz Omoakin',
  views: 23,
  comments:
   { author: 'Mavins',
     body: 'Wow! This is a wonderful development' },
  isLive: true }
*/

//MOSH SOLUTION

const blogPost = {
  title: "Glo Prepaid plan",
  body: `Glo anounced bumpa data
            Get 3GB for 1k
            Get 4GB for 2k`,
  author: "Michaelz Omoakin",
  views: 23,
  //  comments sud be an array bcos we can have more than one comments
  comments: [
    {
      author: "Mavins",
      body: `Wow! This is a wonderful development`
    },
    {
      author: "Abimbola",
      body: `Lemme sharply recharge`
    }
  ],
  isLive: true
};
console.log(blogPost);

/*RESULTS : -
{ title: 'Glo Prepaid plan',
  body:
   'Glo anounced bumpa data\n            Get 3GB for 1k\n            Get 4GB for 2k',
  author: 'Michaelz Omoakin',
  views: 23,
  comments:
   [ { author: 'Mavins',
       body: 'Wow! This is a wonderful development' },
     { author: 'Abimbola', body: 'Lemme sharply recharge' } ],
  isLive: true }
  */
