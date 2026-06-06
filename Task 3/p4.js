const text = "This is a random string with more than twenty characters.";

function countLetters(str) {
    const vowels = str.match(/[aeiou]/gi);
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);

    return {
        vowelsCount: vowels ? vowels.length : 0,
        consonantsCount: consonants ? consonants.length : 0
    };
}

console.log(countLetters(text)); 
// Output: { vowelsCount: 15, consonantsCount: 33 }