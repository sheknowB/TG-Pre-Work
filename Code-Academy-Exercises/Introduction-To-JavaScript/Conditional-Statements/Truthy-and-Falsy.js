let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
/*Sometimes we will want to check if a variable exists and not necessarily equate to a specific value.
  In these instances the code will run because the value has a truthy value or a non-falsy value.
  Falsy values are:
    1. 0
    2. Empty strings
    3. null
    4. undefined
    5. NaN (Not a Number)
*/
