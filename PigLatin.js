function translatePigLatin(str) {
    let newWord = '';
    const firstVowelIndex = str.search(/[aeiou]/i);
  
    if (firstVowelIndex === -1) {
      // If there are no vowels, simply add "ay" to the end.
      newWord = `${str}ay`;
    } else if (firstVowelIndex === 0) {
      // If the word starts with a vowel, add "way" to the end.
      newWord = `${str}way`;
    } else {
      // If the word starts with a consonant, move the consonant(s) to the end and add "ay."
      const consonants = str.slice(0, firstVowelIndex);
      const restOfWord = str.slice(firstVowelIndex);
      newWord = `${restOfWord}${consonants}ay`;
    }
  
    console.log(newWord);
    return newWord;
  }
  
  translatePigLatin("rhythm"); // Output: "rhythmay"
  