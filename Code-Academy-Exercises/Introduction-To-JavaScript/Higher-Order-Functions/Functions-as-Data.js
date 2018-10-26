const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;//Assigning a new name for the function checkThatTwoPlusTwoEqualsFourAMillionTimes
is2p2();//Call function is2p2
console.log(is2p2.name);//Print out the original name of function is2p2


/* JavaScript functions behave like any other data type in the language. We can assign functions to variables, and we can reassign them to new variables.
  In JavaScript, functions are first class objects, this means JavaScript functions can have properties and methods.
*/
