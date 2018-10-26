const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers =
randomNumbers.filter(number => {
  return number < 250;
});// filtering out numbers that are less than 250
console.log(smallNumbers);// Print to check .filter() method

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});// filtering out letters that exceed 7 letters in length
console.log(longFavoriteWords);// Print to check .filter() method

/* The .filter() method is similar to .map() in that it returns an array. However it returns an array of elements after filtering out certain elements of the original array.
  The callback function for the .filter() method should return a boolean value. The elements that are returned true from the callback function are added to the new array.
*/
