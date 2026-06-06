let string = 'INDIA';

let arr = string.split('');
// Start at index 3, remove 2 elements, insert new letters
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');

let newString = arr.join('');
console.log(newString); 
// Output: 'INDONESIA'