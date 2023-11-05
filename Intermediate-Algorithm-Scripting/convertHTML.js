function convertHTML(str) {
    function convertSymbols(symbol) {
      switch (symbol) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&apos;';
        default:
          return symbol;
      }
    }
    
    let symbolToConvert = ['&', '<', '>', '"', "'"];
    
    for (let i = 0; i < str.length; i++) {
      if (symbolToConvert.indexOf(str[i]) !== -1) {
        str = str.slice(0, i) + convertSymbols(str[i]) + str.slice(i + 1);
      }
    }
  
    return str;
  }
  
  console.log(convertHTML("Schindler's List"));
  
  