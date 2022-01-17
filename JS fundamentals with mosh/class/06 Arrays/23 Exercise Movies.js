/*We have an array of movies containing 4 movie objects, we are to write code to
 * Get all the movies in 2018 with rating > 4
 * Sort them by their rating in descending order
 * Pick their title*/

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

// We first use the filter method to filter objects having their year as "2018" with their rating equals to greater than 4.
const result = movies
  //  we first filter the array with the year and rating criteria to get 2018 movies with rating greater or equal to 4
  .filter(movie => movie.year === 2018 && movie.rating >= 4)
  .map(movie => movie.title)
  /*  //  here we want to sort the array
    .sort((a, b) => {
      if (a < b) return -1;
      if (a === b) return 0;
      if (a > b) return 1;
    })*/
  .reverse();
console.log(result); // RESULT = [ 'b', 'a' ]
