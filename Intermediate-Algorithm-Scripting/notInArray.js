// Method 1
function diffArray(arr1, arr2) {
    const newArr = [];
    for(let i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i])=== -1){
        newArr.push(arr1[i])
      }
    }
    for(let i = 0; i< arr2.length; i++){
      if(arr1.indexOf(arr2[i])=== -1){
        newArr.push(arr2[i])
      }
    }
   return newArr; 
  }
  
  // Method 2
  function diffArray2(arr1, arr2) {
    const notInArr2 = arr1.filter(item => !arr2.includes(item));
    const notInArr1 = arr2.filter(item => !arr1.includes(item));
    return [...notInArr2, ...notInArr1];
  }
  
  
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));