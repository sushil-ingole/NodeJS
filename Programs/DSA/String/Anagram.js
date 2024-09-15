(function isAnagram() {
    let str1 = "wow";
    let str2 = "wwoo";
    if(str1.length !== str2.length) {
        console.log(`Strings are not Anagram.`);
        return;
    }
    let mp1 = new Map();
    
    for(let i=0; i<str1.length; i++) {
        let val = str1[i];
        if(mp1.has(val)) {
            mp1.set(val, mp1.get(val)+1);
        } else {
            mp1.set(val, 1);
        }
    }
    
    for(let i=0; i<str2.length; i++) {
        let val = str2[i];
        if(!mp1.has(val) || mp1.get(val) === 0) {
            console.log(`Strings are not Anagram.`);
            return;
        } else {
            mp1.set(val, mp1.get(val) - 1);
        }
    }
    
    console.log(`Strings are Anagram.`);
})();

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

// Example:
// Word 1: listen
// Word 2: silent
// Both listen and silent contain the same letters, just arranged differently, so they are anagrams of each other.