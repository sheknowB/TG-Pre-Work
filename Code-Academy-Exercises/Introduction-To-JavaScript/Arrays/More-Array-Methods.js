const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();//Shifts out the first item of the array

groceryList.unshift('popcorn');//Unshift adds an item(s) to the first position of array

console.log(groceryList.slice(1,4));//Slices the groceryList array

groceryList.indexOf('pasta');//Finds the index position of the element pasta
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);//Stores the indexOf output to variable pastaIndex

//There are a number of array methods that can be deployed in our code. We explore .shift(), .unshift(), .slice(), and .indexOf()
