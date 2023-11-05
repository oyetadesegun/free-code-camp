function sumPrimes(num) {
    if(num <= 1){
      return "it cant be less than 1"
    }
    let counter =2;
    let sum = 0;
    while(counter <= num){
      if(isPrime(counter)){
        sum += counter;
      }
        counter++;
    }
    return sum;
  }
  
  function isPrime(singleNumber){
    let divisor = 2;
    while (divisor < singleNumber){
      if(singleNumber % divisor === 0){
        return false;
      }
      divisor++;
    }
    return true;
    
  }
  console.log(sumPrimes(977));
  console.log(isPrime(2))