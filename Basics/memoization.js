let obj = {};
function sum(a, b) {
    if (!obj[`${a},${b}`]) {
        console.log(a, b);
        obj[`${a},${b}`] = a + b;
        return a + b;
    }
    return obj[`${a},${b}`];
}

console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(2, 2));

// Output:
// 1 2
// 3
// 3
// 3
// 2 2
// 4

