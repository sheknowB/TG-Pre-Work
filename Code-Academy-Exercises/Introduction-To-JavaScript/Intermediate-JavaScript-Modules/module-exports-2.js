// Following code is the 2-airplane.js file
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
  	return this.myAirplane;
	}
};

// Following code is the 2-missionControl.js file
const Airplane = require('./2-airplane.js')

console.log(Airplane.displayAirplane());

// A collection of data and functions included in an object can be exported with module.exports
