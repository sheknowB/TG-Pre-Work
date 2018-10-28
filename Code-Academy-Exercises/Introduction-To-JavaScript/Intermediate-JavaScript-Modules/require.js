const Airplane = require('./1-airplane.js'); // Import module

function displayAirplane() { // Create function displayAirplane
  console.log(Airplane.myAirplane); // Log the myAirplane property of the imported module to the console
}

displayAirplane(); // Call function displayAirplane

// The require() function is one way to import a module.
/* The pattern to import a module goes as:
    1.  Import module
    2.  Use module and its properties within a program
*/
