const numbers = [19, 12, 10, 11, 4, 111, 6, 112, 1, 7];

function merge(arr, s, e) {
    if (s >= e) return;
    let mid = Math.floor((s + e) / 2);
    let len1 = mid - s + 1;
    let len2 = e - mid;
    let mainArrIndex = s;
    let left = Array(len1);
    let right = Array(len2);
    for (let i = 0; i < len1; i++) {
        left[i] = arr[mainArrIndex++];
    }
    mainArrIndex = mid + 1;
    for (let i = 0; i < len2; i++) {
        right[i] = arr[mainArrIndex++];
    }
    let leftIndex = 0
    let rightIndex = 0;
    mainArrIndex = s;
    while (leftIndex < len1 && rightIndex < len2) {
        if (left[leftIndex] < right[rightIndex]) {
            arr[mainArrIndex++] = left[leftIndex++];
        } else {
            arr[mainArrIndex++] = right[rightIndex++];
        }
    }
    while (leftIndex < len1) {
        arr[mainArrIndex++] = left[leftIndex++];
    }
    while (rightIndex < len2) {
        arr[mainArrIndex++] = right[rightIndex++];
    }
}

function mergeSortHelper(arr, s, e) {
    if (s >= e) return;
    let mid = Math.floor((s + e) / 2);
    mergeSortHelper(arr, s, mid);
    mergeSortHelper(arr, mid + 1, e);
    merge(arr, s, e);
}

function mergeSort(arr) {
    let s = 0;
    let e = arr.length - 1;
    mergeSortHelper(arr, s, e);
}

mergeSort(numbers);
console.log(numbers.toString());