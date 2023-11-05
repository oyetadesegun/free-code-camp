function uniteUnique(arr) {
    let finalArray =[];
    let initArray= Object.values(arguments)
    for(let i = 0; i < initArray.length; i++ ){
      // console.log(initArray[i]);
      let individualArray =initArray[i]
      for(let j= 0; j < individualArray.length; j++){
        let numb = individualArray[j]
        if(finalArray.indexOf(numb)=== -1){
        finalArray.push(numb)
        }
      }
    }
    console.log(finalArray)
    return finalArray;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])