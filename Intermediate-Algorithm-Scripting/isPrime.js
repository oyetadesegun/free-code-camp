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