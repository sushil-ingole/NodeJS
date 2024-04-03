function swapUsingThirdVariable(num1, num2) {
    let temp = num2;
    num2 = num1;
    num1 = temp;
    return [num1, num2];
}

function swapWithoutUsingThirdVariable(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    return [num1, num2];
}

(function swap2Nums() {
    let num1 = 2;
    let num2 = 3;
    console.log("Before swap");
    console.log("num1: ", num1, " , num2: ", num2);

    // [num1, num2] = swapUsingThirdVariable(num1, num2);
    [num1, num2] = swapWithoutUsingThirdVariable(num1, num2);

    console.log("After swap");
    console.log("num1: ", num1, " , num2: ", num2);
})();