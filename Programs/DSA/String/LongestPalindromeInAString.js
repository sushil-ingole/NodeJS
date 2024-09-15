function isPalindrome(s, i, j) {
    while(i < j) {
        if(s[i] !== s[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
}

function longestPalindrome(s) {
    let ans = "";
    for(let i=0; i<s.length; i++) {
        for(let j=0; j<s.length; j++) {
            if(isPalindrome(s, i, j)) {
                let checkStr = s.slice(i, j+1);
                ans = checkStr.length > ans.length ? checkStr : ans;
            }
        }   
    }
    console.log("ans: ", ans);
}

longestPalindrome("babad"); // bab
longestPalindrome("cbbd"); // bb