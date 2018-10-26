// Write your code below
const bobsFollowers = ['Ann', 'Bob', 'Chris', 'Derek'];
const tinasFollowers = ['Alice', 'Bob', 'Derek'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push();
    }
  }
}
//One use for a nested for loop is to compare contents of multiple arrays. Cross-checking.
