let flatArr = [];
function flattenArrayHelper(value) {
    if (Array.isArray(value)) {
        value.forEach((val) => {
            if (Array.isArray(val)) {
                val.forEach((v) => {
                    flattenArrayHelper(v);
                });
            } else {
                flatArr.push(val);
            }
        });
    } else {
        flatArr.push(value);
    }
}

(function flattenArray() {
    let arr = [1, [2, 3], 4, [5, [6, 7], 8], 9];
    console.log("Before flattening array: ");
    console.log(arr);
    flattenArrayHelper(arr);
    console.log("After flattening array: ");
    console.log(flatArr);
})();