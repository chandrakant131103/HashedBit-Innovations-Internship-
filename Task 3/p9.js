function countWords(paragraph) {
    if (!paragraph.trim()) return 0;
    return paragraph.trim().split(/\s+/).length;
}

const para = "This is a simple paragraph to count the number of words.";
console.log(countWords(para)); 
// Output: 11