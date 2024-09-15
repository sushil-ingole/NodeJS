function findAllPermutations(str, i = 0) {
    if (i >= str.length) {
        console.log(str);
        return;
    }

    for (let j = i; j < str.length; j++) {
        let charArray = str.split('');
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
        findAllPermutations(charArray.join(''), i + 1);
    }
}

let str = "ABC";
findAllPermutations(str);