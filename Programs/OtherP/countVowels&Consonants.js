(function countVowelsAndConsonants() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let str = 'aabcdeiou';

    let vowelsCount = 0;
    let consonantsCount = 0;
    for (let i = 0; i < str.length; i++) {
        let index = vowels.findIndex((v) => v === str[i]);
        if (index > -1) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
    console.log("vowelsCount: ", vowelsCount);
    console.log("consonantsCount: ", consonantsCount);
})();