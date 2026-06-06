function findTax(salary) {
    let taxAmount = 0;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxAmount = 0; // 0% tax
            break;
        case (salary > 500000 && salary <= 1000000):
            taxAmount = salary * 0.10; // 10% tax on the entire salary
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxAmount = salary * 0.20; // 20% tax on the entire salary
            break;
        case (salary > 1500000):
            taxAmount = salary * 0.30; // 30% tax on the entire salary
            break;
        default:
            return "Invalid salary input. Please enter a number greater than 0.";
    }

    return taxAmount;
}

console.log(findTax(600000)); // Outputs: 60000