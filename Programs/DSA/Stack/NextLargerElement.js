// function nextLargerElement(arr, n) { // O(n^2)
//     let ans = [];
//     for(let i=0; i<n; i++) {
//         let curr = arr[i];
//         let nextMaxEle = curr;
//         for(let j=i+1; j<n; j++) {
//             if(arr[j] > nextMaxEle) {
//                 nextMaxEle = arr[j];
//                 break;
//             }
//         }
//         ans.push(nextMaxEle === curr ? -1 : nextMaxEle);
//     }
//     console.log(ans);
// }

function nextLargerElement(arr, n) { // O(n)
    let ans = [], stack = [-1];
    for(let i=n-1; i>=0; i--) {
        let curr = arr[i];
        let stTop = stack[stack.length-1];
        while(stTop !== -1 && arr[stTop] <= curr) {
            stack.pop();
            stTop = stack[stack.length-1];
        }
        ans[i] = stTop === -1 ? stTop : arr[stTop];
        stack.push(i);
    }
    console.log(ans);
}

// let arr = [2,1,4,3]; // [ 4, 4, -1, -1 ]
let arr = [4, 5, 2, 10, 8]; // [5, 10, 10, -1, -1]
nextLargerElement(arr, arr.length);