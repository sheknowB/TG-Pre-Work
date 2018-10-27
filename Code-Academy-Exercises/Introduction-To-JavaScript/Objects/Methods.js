let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
alienShip.retreat();// Invoke alienShip's retreat method
alienShip.takeOff();// Invoke alienShip's takeoff method

// When the data stored on an object as function it is called a method. A property is what an object has, while a method is what an object does.
