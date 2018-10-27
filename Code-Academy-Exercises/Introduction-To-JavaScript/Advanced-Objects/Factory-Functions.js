const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
    console.log('Beep Boop')
  	}
  }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep(); // call the beep method of tinCan
console.log(tinCan.model); // output the model property of tinCan

/* A factory function is a function that returns an object and can be reused to make multiple object instances.
  Factory functions can also have parameters allowing us to customize the object that gets returned.
