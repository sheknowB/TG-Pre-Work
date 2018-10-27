const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//Arrow functions inherently bind an already defined this value to the function itself that is NOT the calling object. Because of this we should avoid using arrow functions when using this in a method.
