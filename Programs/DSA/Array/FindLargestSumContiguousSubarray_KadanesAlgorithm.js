function findLargestSumContiguousSubarray1(arr) { // O(n^3)
    let maxSum = -Infinity;
    let len = arr.length;
    for(let i=0; i<len; i++) {
        for(let j=i; j<len; j++) {
            let sum = arr.reduce((acc, total) => acc+total, 0);
            maxSum = sum > maxSum ? sum : maxSum;
        }   
    }
    return maxSum;
}

function findLargestSumContiguousSubarray2(arr) { // O(n^2)
    let maxSum = -Infinity;
    let len = arr.length;
    for(let i=0; i<len; i++) {
        let sum = 0;
        for(let j=i; j<len; j++) {
            sum += arr[j];
            maxSum = sum > maxSum ? sum : maxSum;
        }   
    }
    return maxSum;
}

function findLargestSumContiguousSubarray3(arr) { // O(n) (Kadane's Algorithm)
    let len = arr.length;
    let maxSum = arr[0];
    let sum = 0;
    for(let i=0; i<len; i++) {
        sum += arr[i];
        maxSum = Math.max(maxSum, sum);
        if(sum < 0) sum = 0;
    }
    return maxSum;
}

let arr = [5,4,-1,7,8];
console.log(findLargestSumContiguousSubarray1(arr));
console.log(findLargestSumContiguousSubarray2(arr));
console.log(findLargestSumContiguousSubarray3(arr));