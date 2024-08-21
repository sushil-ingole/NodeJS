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