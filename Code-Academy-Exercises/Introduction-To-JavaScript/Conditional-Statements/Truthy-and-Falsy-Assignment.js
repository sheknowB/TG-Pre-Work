let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

/* In this exercise we learn short-circuit evaluation. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment.
  Since the left side condition is checked first the variable will be assigned the actual value if it is truthy, and if falsy it will be assigned the right-hand value.
*/
