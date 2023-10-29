Array.prototype.myFilter = function(callback) {
    const newArray = [];
    const encounteredElements = new Set(); // Keep track of encountered elements
  
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      if (!encounteredElements.has(element)) {
        if (callback(element, i, this)) {
          newArray.push(element);
        }
        encounteredElements.add(element); // Mark the element as encountered
      }
    }
  
    return newArray;
  }
  //Second Option
  Array2.prototype.myFilter = function(callback) {
  let newArray2 = [];
  this.forEach(function(individualElement){
    if(callback(individualElement)){
        newArray2.push(individualElement);
    }
  });
  return newArray2;
}