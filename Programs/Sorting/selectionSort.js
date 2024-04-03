const numbers = [19, 12, 10, 11, 4, 111, 6, 112, 1, 7];
function swap(arr, n1, n2) {
    let temp = arr[n2];
    arr[n2] = arr[n1];
    arr[n1] = temp;
}

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
}

selectionSort(numbers);
console.log(numbers.toString());