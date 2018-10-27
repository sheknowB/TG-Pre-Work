let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = green => {
  green['Fuel Type'] = 'avocado oil';
};

const remotelyDisable = remote => {
  remote.disabled = true;
};
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
/* Objects are passed by reference, which means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.
  As a result, functions which change object properties actually mutate the object permanently regardless if the object was assigned as a const variable.
*/
