const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(word => {
  return word[0];
});// This says to take the animals array and return the first letter of each element and store into secretMessage

console.log(secretMessage.join(''));// Prints out the array and joins the elements together

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
});// Take the numbers in the array bigNumbers and divide each by 100. Then store into smallNumbers
console.log(smallNumbers);// Prints the new array called smallNumbers

// When the .map() method is used on an array, it takes an argument of a callback function and returns a new array.
