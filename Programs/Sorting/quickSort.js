const numbers = [19, 12, 10, 11, 4, 111, 6, 112, 1, 7];

function partition(arr, s, e) {
    let pivotI = s;
    let pivotE = arr[s];
    let count = 0;
    for (let i = s + 1; i <= e; i++) {
        if (pivotE >= arr[i]) {
            count++;
        }
    }
    let temp = arr[count + s];
    arr[count + s] = arr[pivotI];
    arr[pivotI] = temp;
    pivotI = count + s;

    let i = s, j = e;
    while (i < pivotI && j > pivotI) {
        while (arr[i] < pivotE) {
            i++;
        }
        while (arr[j] > pivotE) {
            j--;
        }
        if (i < pivotI && j > pivotI) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return pivotI;
}

function bubbleSortHelper(arr, s, e) {
    if (s >= e) return;
    let p = partition(arr, s, e);
    bubbleSortHelper(arr, s, p - 1);
    bubbleSortHelper(arr, p + 1, e);
}

function bubbleSort(arr) {
    let s = 0;
    let e = arr.length - 1;
    bubbleSortHelper(arr, s, e);
}

bubbleSort(numbers);
console.log(numbers.toString());