function sumOfProductOfDigits(n1, n2) {
    let sum = 0;

  
    while (n1 > 0 || n2 > 0) {
        // Extract the last digit of each number
        // number becomes 0, 0 % 10 will safely return 0
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        // Multiply the corresponding digits and add to the total sum
        sum += (digit1 * digit2);

        // Remove the last digit from the original numbers
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}


console.log(sumOfProductOfDigits(6, 34)); // Outputs: 24 (6*4 + 0*3)
console.log(sumOfProductOfDigits(123, 45)); // Outputs: 13 (3*5 + 2*4 + 1*0)