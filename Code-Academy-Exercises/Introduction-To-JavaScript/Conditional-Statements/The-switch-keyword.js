let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
/* When we need to check multiple values, using a switch statement is easier to read and write than having to fill our code with multiple else if statements.
  The switch keyword initiates the statement and is followed by (...) which contains the value that each case will compare.
  Inside the {} block are multiple cases that are compared to our case keyword. If there is a match that case's console.log() will execute.
  The break keyword is important and tells the computer to exit the block and not execute anymore code or check any other cases inside the block. If there were no break keyword the code will continue to run all cases even the default.
  If there are no matches the code runs the default case.
*/
