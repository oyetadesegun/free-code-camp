function steamrollArray(arr) {
    const flattenedArray = [];
  
    function flatten(arr) {
      for (let item of arr) {
        if (Array.isArray(item)) {
          flatten(item);
        } else {
          flattenedArray.push(item);
        }
      }
    }
  
    flatten(arr);
  
    return flattenedArray;
  }
// method 2
  