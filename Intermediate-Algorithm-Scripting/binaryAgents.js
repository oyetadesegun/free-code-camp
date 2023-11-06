function binaryAgent(binaryString) {
    const binaryArray = binaryString.split(' '); // Split binary values by spaces
  
    // Convert binary values to ASCII characters
    const sentence = binaryArray
      .map((binaryValue) => String.fromCharCode(parseInt(binaryValue, 2)))
      .join(''); // Join the characters to form a sentence
  
    return sentence;
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01100110 01100101 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
  // Output: "Aren't bonfires fun!?"
  
  console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
  // Output: "I love FreeCodeCamp!"
  