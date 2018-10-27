const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const { functionality } = robot;
functionality.beep();

//Another destructuring technique is destructurd assignment where we create a variable with the name of an object's key that is wrapped in curly braces {} and assign to it the object.
