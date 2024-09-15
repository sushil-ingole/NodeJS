// An Armstrong number (also known as a narcissistic number or pluperfect number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits in the number.

// Example:
// Number: 153
// Here’s how to check if 153 is an Armstrong number:

// Count the number of digits: 1, 5, 3 (3 digits).
// Raise each digit to the power of 3 (since there are 3 digits):
// 1^3 = 1
// 5^3 = 125
// 3^3 = 27
// Sum the results: 
// 1 + 125 + 27 = 153
// 1+125+27=153.
// Since the sum is equal to the original number, 153 is an Armstrong number.

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