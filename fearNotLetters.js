function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startPos = alphabet.indexOf(str[0]);


    //  let range =alphabet.slice(alphabet.indexOf(str[0]),alphabet.indexOf(str[str.length-1]))
    for (let i = startPos; i <= startPos + str.length; i++) {
        //  console.log(alphabet[i])
        if (alphabet[i] !== str[i - startPos]) {
            return alphabet[i]
        }
    }
    //  console.log(str.indexOf('d'))
    // return str;
}


fearNotLetter("abce");
// fearNotLetter("abcdefghjklmno")
// fearNotLetter("stvwx")