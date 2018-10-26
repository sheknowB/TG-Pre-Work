const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});// find the index that houses the string 'elephant' in the animals array
console.log(foundAnimal);

const startsWithS = animals.findIndex(word => {
  return word[0] === 's';
});//find the index that houses the animal with a name that starts with s
console.log(startsWithS);
/* Calling the .findIndex() method returns the first the index of the first element that evaluates to true in the callback function.
  If no element satisfies the callback function it will return a -1.
*/
