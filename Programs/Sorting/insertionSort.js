function insertionSortHelper(arr) {
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (val < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = val;
    }
}

(function insertionSort() {
    let arr = [19, 12, 10, 11, 4, 111, 6, 112, 1, 7];
    console.log("Before sorting: ");
    console.log(arr);
    insertionSortHelper(arr);
    console.log("After sorting: ");
    console.log(arr);
})();