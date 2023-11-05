function newArray(arr){
    console.log(arguments[1])
}

newArray(1, 2)

newArray([1, 2], 3, 4)
// adding new lins

function uniteUnique(arr) {
    let newArray = [];
    let list =Object.values(arguments);
    newArray.push(...list)
    console.log(newArray)
    for(let i =0; i< arguments.length; i++){
      console.log(arguments[i])
    }
    return arr;
  
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);