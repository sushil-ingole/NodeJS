(function reverseNum() {
    let numToConv = 12345;
    let num = numToConv;
    let finalNum = 0;
    let i = 0;
    while (num) {
        let rem = num % 10;
        finalNum = i = (i * 10) + rem;
        num = Math.floor(num / 10);
    }
    console.log("Before Reverse Num: ", numToConv);
    console.log("After  Reverse Num: ", finalNum);
})();