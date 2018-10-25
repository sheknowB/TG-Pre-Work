let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';//Update index0
console.log(condiments);//Prints updated array

condiments = ['Mayo'];//Reassign a whole new array to variable condiments
console.log(condiments);//Prints new array

utensils[3] = 'Spoon';//Update the last item in the utensils array
console.log(utensils);//Prints updated array

/*Variables declared with let can be reassigned, variables declared with const cannot.
  However, elements in an array declared with const remain mutable. We can change the contents of a const array, but cannot reassign a new array or a different value.
*/
