function correctfn(string, wrong, correct) {
    // Using regex with 'g' flag to replace all occurrences if needed
    return string.replace(new RegExp(wrong, 'g'), correct);
}

const sentence = "I am learning Javascrit.";
console.log(correctfn(sentence, "Javascrit", "JavaScript")); 
// Output: "I am learning JavaScript."