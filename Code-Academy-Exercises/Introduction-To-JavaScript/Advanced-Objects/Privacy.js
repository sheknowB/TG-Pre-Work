const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';

robot.recharge();

/* Privacy in objects is the idea that only certain properties should be mutable.
  JavaScript doesn't have any privacy built-in to objects, so they use naming conventions to signal to other coders what should not be altered.
