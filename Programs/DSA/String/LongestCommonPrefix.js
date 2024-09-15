(function longestCommonPrefix() {
    let strs = ["flower", "flow", "flight"];
    let maxLen = 0;
    for (const element of strs) {
        maxLen = Math.max(maxLen, element.length);
    }
    let finalAns = '';
    for (let i = 0; i < maxLen; i++) {
        let currChar = strs[0][i];
        let isSameChar = true;
        for (let j = 1; j < strs.length; j++) {
            if (currChar !== strs[j][i]) {
                isSameChar = false;
            }
        }
        if (isSameChar) finalAns += currChar;
    }
    console.log("Longest common prefix is: ", finalAns);
})();