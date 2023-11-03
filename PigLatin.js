function translatePigLatin(str) {
    let newWord = '';
    if (/^[aeiou]/i.test(str)) {
      newWord = `${str}way`;
    } else {
      const firstVowelIndex = str.search(/[aeiou]/i);
      const consonants = str.slice(0, firstVowelIndex);
      const restOfWord = str.slice(firstVowelIndex);
      newWord = `${restOfWord}${consonants}ay`;
    }
  
    console.log(newWord);
    return newWord;
  }
  
  translatePigLatin("consonant");  // Output: "onsonantcay"
  translatePigLatin("paragraphs");  // Output: "aragraphspay"
  translatePigLatin("glove");  // Output: "oveglay"
  