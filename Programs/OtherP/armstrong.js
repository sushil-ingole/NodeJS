(function isArmStrongNumber() {
    // Armstrong nums upto 1000 - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407
    let inputNum = 153;
    let num = inputNum;
    let isArmStrong = true;
    let numOfDigits = 0;
    let numArr = [];
    while (num) {
        let rem = num % 10;
        numArr.push(rem);
        num = Math.floor(num / 10);
        numOfDigits += 1;
    }
    let finalNum = 0;
    for (let i = numArr.length - 1; i >= 0; i--) {
        let currNum = numArr[i];
        let finalMulNum = currNum;
        for (let j = 0; j < numOfDigits - 1; j++) {
            finalMulNum *= currNum;
        }
        finalNum += finalMulNum;
    }
    if (finalNum !== inputNum) isArmStrong = false;
    if (isArmStrong) console.log(`${inputNum} is an ArmStrong number.`);
    else console.log(`${inputNum} is not an ArmStrong number.`);
})();