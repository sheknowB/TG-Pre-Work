import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  };)
};

displayFuelCapacity(); 

// The import keyword is used for importing modules
/* The syntax is as followed: import variableName from 'moduleName';
    The import keyword begins the statement, followed by the name of the variable to store the default export in.
    The from keyword specifies where to load the module from, follwed by the name of the module to load. When dealing with local files, the file extension is not needed.
*/
