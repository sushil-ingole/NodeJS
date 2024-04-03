let arr = [1, 2, [3, 4], [5, [6, 7], 8], 9];
let sum = 0;
function flatten(num) {
    if (isNaN(num)) {
        for (let i = 0; i < num.length; i++) {
            flatten(num[i]);
        }
    } else {
        sum += num;
    }
}

for (let i = 0; i < arr.length; i++) {
    flatten(arr[i]);
}

console.log("sum: ", sum);