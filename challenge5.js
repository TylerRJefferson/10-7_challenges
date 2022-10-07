/* write a function that takes a list of groceries as an array, and take a number 1-4, 
 and list that element of the array USING HUMAN COUNTING */


const groceries = ['Eggs', 'Milk', 'Cheese', 'Beer',]

function getGroceries(index, groceries) {
  return groceries[index - 1];
}

console.log(getGroceries(4, groceries))
