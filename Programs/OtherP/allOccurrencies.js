(function allOccurrencies() {
    let str = "abbcccddddeeeee";
    let mp = new Map();
    for (let i = 0; i < str.length; i++) {
        mp.set(str[i], mp.get(str[i]) ? mp.get(str[i]) + 1 : 1);
    }
    mp.forEach((value, key) => {
        console.log("key: ", key, " , value: ", value);
    });
})();