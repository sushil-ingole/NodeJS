(function printNonRepeatingChars() {
    let str = "abbcccddddeeeee";
    let finalStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!finalStr.includes((str[i]))) {
            finalStr += str[i];
        }
    }
    console.log("Non repeating characters: ", finalStr);
})();