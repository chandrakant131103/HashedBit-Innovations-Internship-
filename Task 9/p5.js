const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function getOddNumbers(arr) {

    
    return arr.filter(num => num % 2 !== 0);


}

console.log(getOddNumbers(numbers));


