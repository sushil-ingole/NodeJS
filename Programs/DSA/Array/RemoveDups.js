(function removeDups() {
    let numArr = [1, 1, 2, 3, 4, 4, 5, 6, 6];
    let finalArr = [];
    for (let i = 0; i < numArr.length; i++) {
        let index = finalArr.findIndex((val) => val === numArr[i]);
        if (index === -1) {
            finalArr.push(numArr[i]);
        }
    }
    console.log(finalArr);
})();