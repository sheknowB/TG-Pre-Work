const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  };// Add if statement here:

  console.log(lightWaves);
};

logVisibleLightWaves();

/* Best practice would be to define variables within your block to avoid polluting the global namespace. Tightly scoping your variables improves your code in several ways such as legibility, understandibility, easier to maintain, and saves on memory.
  Block scope allows us to define variables with precision.
*/
