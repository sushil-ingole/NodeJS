(function removeSubstring() {
    let str = "st";
    let subStr = "sub";
    // console.log(str.replaceAll(subStr, ''));
    let finalAns = "";
    for (let i = 0; i < str.length; i = i + subStr.length) {
        if (str.slice(i, i + subStr.length) !== subStr) {
            finalAns += str.slice(i, i + subStr.length);
        }
    }
    console.log("finalAns: ", finalAns);
})();