const numbers = [19, 12, 10, 11, 4, 111, 6, 112, 1, 7];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                swapped = true;
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        if (!swapped) break;
    }
}

bubbleSort(numbers);
console.log(numbers.toString());