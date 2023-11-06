function dropElements(arr, func) {
    // Find the index of the first element that satisfies the condition
    let index = arr.findIndex(func);
  
    // If a valid index is found, slice the array to keep elements from that index onwards
    if (index !== -1) {
      return arr.slice(index);
    } else {
      // If no valid index is found, return an empty array
      return [];
    }
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }));  // Output: [3, 4]
  console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; }));  // Output: [1, 0, 1]
  console.log(dropElements([1, 2, 3], function(n) { return n > 0; }));  // Output: [1, 2, 3]
  console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; }));  // Output: []
  console.log(dropElements([1, 2, 3, 7, 4], function(n) { return n > 3; }));  // Output: [7, 4]
  console.log(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }));  // Output: [3, 9, 2]
  