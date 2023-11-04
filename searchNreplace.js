function myReplace(str, before, after) {
  console.log(before)
  let strCollection = str.split(' ');
  for (let i = 0; i < strCollection.length; i++) {
    if (strCollection[i] === before) {
      if (strCollection[i][0] === strCollection[i][0].toUpperCase()) {
        let capLetter = after[0].toUpperCase()
        strCollection[i] = capLetter + after.slice(1);
        return strCollection.join(' ')
      }
      strCollection[i] = after.toLowerCase();
      return strCollection.join(' ')
    }
  }
  return str.split(before).join(after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))