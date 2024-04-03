function binarySearchHelper(arr, target) {
    let s = 0;
    let e = arr.length - 1;
    let mid = Math.floor((s + e) / 2);
    while (s <= e) {
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }
        mid = Math.floor((s + e) / 2);
    }
    return -1;
}

(function binarySearch() {
    let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];
    let target = 12;
    let ans;
    ans = binarySearchHelper(arr, target);
    if (ans > -1)
        console.log(`Found at index: ${ans}`);
    else
        console.log("Element not found");
})();