function missingNumber(n, arr) {
    // arr.sort((a, b) => a-b);
    arr.sort((a,b) => a-b);
    let i;
    for(i=0; i<n-2; i++) {
        if(arr[i+1]-arr[i] != 1) {
            return arr[i+1]-1;
        }
    }
    if(arr[i] + 1 == n) return arr[i-1] + 2;
    return 1;
}

// let arr = [1,2,3,5]; // 4
let arr = [2,3,4,5]; // 1
console.log(missingNumber(5, arr));

// Given an array arr of size n−1 that contains distinct integers in the range of 1 to n (inclusive), find the missing element. The array is a permutation of size n with one element missing. Return the missing element.

// Examples:
// Input: n = 5, arr[] = [1,2,3,5]
// Output: 4
// Explanation : All the numbers from 1 to 5 are present except 4.
// Input: n = 2, arr[] = [1]
// Output: 2
// Explanation : All the numbers from 1 to 2 are present except 2.