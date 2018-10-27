let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 7;
delete spaceship['Secret Mission'];

/* Once an object is defined, their properties can be updated. Properties are mutable.
  Using the previous exercises, we can use dot or bracket notation to change the properties of the object.

  One of two things can happen with property assignment.
    - If the property already exists on the object, whatever value it held will be replaced.
    - If there was no property with that name, a new property will be added to the object.

  An important note. If we declared an object with const, though we can't reassign the object, we can still mutate it.
  We can also delete a property: delete object.propertyName
