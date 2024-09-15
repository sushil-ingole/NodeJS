// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array. Please implement your own.

// const arr = [1, [2], [3, [4]]];
// flat(arr)
// // [1, 2, 3, [4]]
// flat(arr, 1)
// // [1, 2, 3, [4]]
// flat(arr, 2)
// // [1, 2, 3, 4]



function flattenArr(temp, depth, finalArr) {
    if(Array.isArray(temp) && depth >= 0) {
        temp.forEach((val) => {
            flattenArr(val, depth-1, finalArr);
        });
    } else {
        finalArr.push(temp);
    }
}
function flat(arr, depth = 1) {
    let finalArr = [];
    flattenArr(arr, depth, finalArr);
    return finalArr;
}


const arr = [1, [2], [3, [4]]];
console.log(flat(arr)) // [1, 2, 3, [4]]
// console.log(finalArr);
// finalArr = [];

console.log(flat(arr, 1)) // [1, 2, 3, [4]]
// console.log(finalArr);
// finalArr = [];

console.log(flat(arr, 2)) // [1, 2, 3, 4]
// console.log(finalArr);
// finalArr = [];

console.log(flat([1,[2],[3,[4]]], 2)); // [1,2,3,4]
// console.log(finalArr);
// finalArr = [];