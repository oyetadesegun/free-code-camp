function destroyer(arr) {
    let survivingElements = [];
    let battleField= Object.values(arguments[0]);
    let elementsToDestroy =Object.values(arguments).splice(1);
    for(let i = 0; i< battleField.length; i++){
      let positionToRecon = battleField[i]
      if((elementsToDestroy.indexOf(positionToRecon)=== -1)){
        survivingElements.push(positionToRecon);
      }
    }
    // console.log(elementsToDestroy.indexOf(3))
    return survivingElements;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);