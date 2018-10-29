import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
  });
};

displayStaffStatus();

function displaySpeedRangeStatus () {
  aircrafts.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

// To import named export aliases with the as keyword, we add the aliased variable into our import statement.
// Another way of importing aliases is to import the entire module as an alias
