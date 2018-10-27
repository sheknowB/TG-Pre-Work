let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
const crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
console.log(crewCount);
console.log(planetArray);

/* There are two ways to access an object's properties.
  First way, dot (.) notation. We've had a lot of experience in previous exercises with this notation. If a property does not exist on the object, undefined will be returned.
*/
