/*On www.yelp.com website, we have got 4 buttons showing price range with 4 labels

$ : - Tool tip for this is Inexpensive
$$ : - Tool tip for this is Moderate
$$$ : - Tool tip for this is Expensive

We are to use javascript object to implement this and define the properties this is suppose to have taken into consideration the label, tooltip, and price ranges
*/

//SOLUTION
const priceRanges = [
  {
    label: "$",
    range: "inexpensive",
    minPricePerPerson: 0,
    maxPricePerPerson: 10
  },
  {
    label: "$$",
    range: "moderate",
    minPricePerPerson: 11,
    maxPricePerPerson: 20
  },
  {
    label: "$$$",
    range: "Expensive",
    minPricePerPerson: 21,
    maxPricePerPerson: 30
  }
];
