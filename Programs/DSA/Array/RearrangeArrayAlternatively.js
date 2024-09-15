let arr = [1,2,3,4,5,6];

function rearrange(arr, n) {
    let i=0;
    while(i <= n-1) {
        arr.splice(i, 0, arr[arr.length-1]);
        arr.splice(arr.length-1, 1);
        i += 2;
    }
}
rearrange(arr, arr.length);
console.log(arr); // [ 6, 1, 5, 2, 4, 3 ]

// Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.
// Note: Modify the original array itself. Do it without using any extra space. You do not have to return anything.

// Example 1:

// Input:
// n = 6
// arr[] = {1,2,3,4,5,6}
// Output: 6 1 5 2 4 3
// Explanation: Max element = 6, min = 1, 
// second max = 5, second min = 2, and 
// so on... Modified array is : 6 1 5 2 4 3.
// Example 2:

// Input:
// n = 11
// arr[]={10,20,30,40,50,60,70,80,90,100,110}
// Output:110 10 100 20 90 30 80 40 70 50 60
// Explanation: Max element = 110, min = 10, 
// second max = 100, second min = 20, and 
// so on... Modified array is : 
// 110 10 100 20 90 30 80 40 70 50 60.