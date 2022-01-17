/*Create a circle object using the object literal syntax,
the object should have a radius property,
the object should have an area property that is read only and cannot be set from the outside but we should be able to read it*/

//circle.radius = 2;
//console.log(circle.area);

//MY SOLUTION

const circle = {
  radius: 4,
  get area() {
    radius = this.radius;
    return Math.floor((22 / 7) * radius * radius);
  }
};
circle.radius = 2;
console.log(circle.area);

//MOSH SOLUTION
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};
console.log(circle.area);
