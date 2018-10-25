let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

/*Variables declared with let can be reassigned, variables declared with const cannot.
  However, elements in an array declared with const remain mutable. We can change the contents of a const array, but cannot reassign a new array or a different value.
*/
