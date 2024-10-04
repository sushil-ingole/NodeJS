const numbers = [19, 12, 10, 11, 4, 111, 6, 112, 1, 7];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
        if (!swapped) break;
    }
}

bubbleSort(numbers);
console.log(numbers.toString());