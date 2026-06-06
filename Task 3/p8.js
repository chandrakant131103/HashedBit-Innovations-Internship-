function singleDigitSum(num) {
    while (num > 9) {
        num = String(num)
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}

console.log(singleDigitSum(456)); 
// Output: 6