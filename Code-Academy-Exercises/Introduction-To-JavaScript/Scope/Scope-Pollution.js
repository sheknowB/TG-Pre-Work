const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); //Prints 'Night Sky: The Moon, Sirius, The Milky Way'
console.log(stars); //Prints Sirius

//Scope pollution is when we have too many global variables residing in the global namespace, or when variables are reused across different scopes. Things can get messy.
