export let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  maxSpeed: 1200,
  minSpeed: 300,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  maxSpeed: 800,
  minSpeed: 200,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

// Named exports can also be exported as soon as they are declared. We place the export keyword in front of the variable declaration.
