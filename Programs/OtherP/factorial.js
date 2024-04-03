function factorialWithoutRecursion(factorialAns, num) {
    for (let i = 1; i <= num; i++) {
        factorialAns *= i;
    }
    return factorialAns;
}

function factorialWithRecursion(factorialAns, num) {
    for (let i = 1; i <= num; i++) {
        factorialAns *= i;
    }
    return factorialAns;
}

(function factorial() {
    let num = 5;
    let factorialAns = 1;
    if (num !== 0) {
        // factorialAns = factorialWithoutRecursion(factorialAns, num);
        factorialAns = factorialWithRecursion(factorialAns, num);
    }
    console.log(`Factorial of ${num} is ${factorialAns}.`);
})();