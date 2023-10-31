function checkPositive(arr) {
    // Only change code below this line
  
  return arr.every(function(curr){ 
  return curr > 0;
   })
    // Only change code above this line
  }


  function checkPositive(arr) {
    // Only change code below this line
  return arr.some((currentValue)=> currentValue > 0)
  
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));