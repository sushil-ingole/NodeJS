(function isAnagram() {
    let str1 = "wow";
    let str2 = "wwoo";
    let mp1 = new Map();
    let isAnagram = true;
    for (let i = 0; i < str1.length; i++) {
        mp1.set(str1[i], mp1.get(str1[i]) ? (mp1.get(str1[i]) + 1) : 1);
    }
    for (let i = 0; i < str2.length; i++) {
        mp1.set(str2[i], mp1.get(str2[i]) ? (mp1.get(str2[i]) + 1) : 1);
    }
    mp1.forEach((value, key) => {
        if (value % 2 !== 0) isAnagram = false;
    });
    if (isAnagram) console.log(`Strings are Anagram.`);
    else console.log(`Strings are not Anagram.`);
})();