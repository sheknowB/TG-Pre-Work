const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = '';
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};

/* Works similarly to a for loop, with the difference being that you don't know how many times you want to run the loop in advance.
  The while loop has a different structure but the same expressions. The initial condition is declared before the loop. The loop begins with the keyword while, followed by the test condition. The code block then follows.
*/
