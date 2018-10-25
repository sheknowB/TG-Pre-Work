const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());
/* Scope is the context which our variables are declared.
  In global scope, variables are declared outside of blocks. These are called global variables. Since global variables are declared outside of the block, they can be accessed by any code in the program, including code in blocks.
*/
