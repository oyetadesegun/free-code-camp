function sumAll(arr) {
    let numbers = arr.sort(function(a,b){
      return a-b;
    });
    // Initialize the sum with the first number
    let sum = 0;
  
    for (let i = numbers[0]; i < numbers[1]+1; i++) {
      sum += i;
    }
  
     return sum;
  }
  
   
  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]));
  console.log(sumAll([5, 10]))
  console.log(sumAll([10, 5]))