function factorialWithoutRecursion(factorialAns, num) {
    for (let i = 1; i <= num; i++) {
        factorialAns *= i;
    }
    return factorialAns;
}

function factorialWithRecursion(num) {
    if(num === 1) return 1;
    return num * factorialWithRecursion(num-1);
}

(function factorial() {
    let num = 5;
    let factorialAns = 1;
    if (num !== 0) {
        // factorialAns = factorialWithoutRecursion(factorialAns, num);
        factorialAns = factorialWithRecursion(num);
    }
    console.log(`Factorial of ${num} is ${factorialAns}.`);
})();