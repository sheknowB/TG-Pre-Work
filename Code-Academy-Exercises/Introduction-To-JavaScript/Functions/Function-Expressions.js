const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

/* Another way to define a function is to use a function expression. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function.
  A function expression is often stored in a variable in order to refer to it.
  To declare a function expression:
    1. Declare a variable to make the variable's name be the identifier of your function. It is common practice to use the const keyword to declare the variable.
    2. Assign as that variable's value an anonymous function created by using the function keyword follwed by a () with possible parameters. Then a set of {} curly braces that contain the funcion body.
*/
