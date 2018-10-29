import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};

displayStaffStatus();

// Just as we exported named variables, we can do the same for importing.
