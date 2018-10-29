console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

/*  In the above code we use setTimeout() which will pass a function call to the queue.
  This first argument is a callback.
  The second argument is the number of milliseconds the program must wait before the callback can be run.
  The other console.log() calls are run from the stack.
*/

/*  JavaScript is an asynchronous language that has non-blocking properties.
  Javascript uses an event loop to handle asynchronous function calls.
  The event loop helps create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events.
  One such system is called Asynchronous JavaScript and XML, or AJAX for short.
*/
