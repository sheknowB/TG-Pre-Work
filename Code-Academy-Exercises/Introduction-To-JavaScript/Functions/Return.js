function monitorCount(rows, columns) {
  const count = rows * columns;
  return count;
}

const numOfMonitors = monitorCount (5, 4);
console.log(numOfMonitors);

/* To pass back information from the function call, we use a return statement.
  When a return statement is used in a function body, the execution of the function is stopped and the code that follows will not execute.
  The return keyword allows functions to produce an output, we can than save that output to a variable for later use.
*/
