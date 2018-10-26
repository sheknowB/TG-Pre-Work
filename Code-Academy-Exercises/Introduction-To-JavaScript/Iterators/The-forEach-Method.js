const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits => console.log('I want to eat a ' + fruits));

/* .forEach() will execute the same code for each element of an array. There are three different ways to write the function with .forEach() method.

  The first way would have the identifier followed by the .forEach method. The .forEach() method takes an argument of callback function loops through the array and executes the callback function for each element.
  The above code would look like this:
    fruits.forEach(function(fruitItem) {
    console.log(' - ' + fruitItem);
    };

  The second way uses the arrow function syntax as I did above.

  The third way we can define a function beforehand to be used as a callback function:
    function printFruits(element){
      console.log(element);
    }
    fruits.forEach(printFruits);
