const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
return arr.concat([]).sort(function(a,b){
return a-b;
})

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));