(function isPalindrome() {
    let str = "wow";
    let isPalindrome = true;
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) console.log(`${str} is a Palindrome.`);
    else console.log(`${str} is not a Palindrome.`);
})();