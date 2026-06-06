const numbers = [10, 20, 30, 40, 50];

function calculateSum(arr) {
    return arr.reduce(
        (sum, current) => sum + current,
        0
    );
}

console.log(calculateSum(numbers));