function swap(arr, n1, n2) {
    let temp = arr[n2];
    arr[n2] = arr[n1];
    arr[n1] = temp;
}

(function sort012s() {
    let arr = [0, 2, 1, 1, 1, 2, 1, 0];
    let i = -1;
    let k = arr.length;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == 1) {
            continue;
        } else if (arr[j] == 0 && j != i) {
            i++;
            if (arr[i] != 0) {
                swap(arr, i, j);
            }
            j--;
        } else if (arr[j] == 2 && j < k) {
            k--;
            if (k >= 0) {
                if (arr[k] != 2) {
                    swap(arr, k, j);
                }
                j--;
            }
        }
    }
    console.log(arr);
})();