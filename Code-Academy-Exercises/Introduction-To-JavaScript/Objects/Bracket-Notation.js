let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
const isActive = spaceship['Active Mission'];
console.log(spaceship['Active Mission']);

/* The other way to access an object's properties is with the bracket [] notation.
  We have experience using bracket notation with indexing arrays. To use bracket notation we pass the property name (key) as a string.
  When accessing keys that have numbers, spaces or special characters we must use bracket notation.
  With bracket notation we can also use a variable inside the brackets to select the keys of an object.
