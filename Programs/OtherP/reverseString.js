function swap(str, i, j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}

function reverseStringUsingRecursionHelper(str, s, e) {
    if (s > e) return;
    swap(str, s, e);
    reverseStringUsingRecursionHelper(str, s + 1, e - 1);
}
function reverseStringUsingTwoPointerHelper(str, s, e) {
    for (let i = 0, j = str.length - 1; i < str.length, j >= 0; i++, j--) {
        if (i < j) {
            swap(str, i, j);
        }
    }
}

(function reverseString() {
    let str = "abcd";
    let arr = str.split("");
    console.log("Before reverse: ", arr.join(""));
    // reverseStringUsingRecursionHelper(arr, 0, arr.length - 1);
    reverseStringUsingTwoPointerHelper(arr, 0, arr.length - 1);
    console.log("After reverse: ", arr.join(""));
})();