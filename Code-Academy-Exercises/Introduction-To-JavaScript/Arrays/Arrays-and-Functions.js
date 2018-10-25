const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);//Calls the function changeArr
console.log(concept);//Prints the concept array with the new change

function removeElement(newArr){
  newArr.pop();
}//Create a new function removeElement
removeElement(concept);//Call function removeElement
console.log(concept);//Prints new concept array

/*When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside of the function as well.
  This is referred to as pass-by-refernce.
*/
