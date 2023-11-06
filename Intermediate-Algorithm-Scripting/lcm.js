function smallestCommons(arr) {
    // Find the minimum and maximum values in the array
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
  
    // Generate a range of numbers from min to max
    let range = [];
    for (let i = min; i <= max; i++) {
      range.push(i);
    }
  
    // Function to find the greatest common divisor (GCD)
    function gcd(a, b) {
      if (b === 0) {
        return a;
      } else {
        return gcd(b, a % b);
      }
    }
  
    // Function to find the least common multiple (LCM) of two numbers
    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }
  
    // Calculate the LCM for the entire range
    let lcmResult = range.reduce((acc, current) => lcm(acc, current));
  
    return lcmResult;
  }
  
  console.log(smallestCommons([1, 5]));  // Output: 60
  console.log(smallestCommons([5, 1]));  // Output: 60
  