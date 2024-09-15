// function nextSmallerElement(arr, n) { // O(n^2)
//     let ans = [];
//     for(let i=0; i<n; i++) {
//         let curr = arr[i];
//         let nextMinEle = curr;
//         for(let j=i+1; j<n; j++) {
//             if(arr[j] < nextMinEle) {
//                 nextMinEle = arr[j];
//                 break;
//             }
//         }
//         ans.push(nextMinEle === curr ? -1 : nextMinEle);
//     }
//     console.log(ans);
// }

function nextSmallerElement(arr, n) { // O(n)
    let ans = [], stack = [-1];
    for(let i=n-1; i>=0; i--) {
        let curr = arr[i];
        let stTop = stack[stack.length-1];
        while(stTop !== -1 && arr[stTop] >= curr) {
            stack.pop();
            stTop = stack[stack.length-1];
        }
        ans[i] = stTop === -1 ? stTop : arr[stTop];
        stack.push(i);
    }
    console.log(ans);
}

// let arr = [2,1,4,3]; // [ 1, -1, 3, -1 ]
let arr = [4, 8, 5, 2, 25]; // [ 2, 5, 2, -1, -1 ]
nextSmallerElement(arr, arr.length);