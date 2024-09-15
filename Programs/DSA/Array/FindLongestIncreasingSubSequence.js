// function isIncreasing(subseq) {
//     for (let i = 1; i < subseq.length; i++) {
//         if (subseq[i] <= subseq[i - 1]) return false;
//     }
//     return true;
// }

// function generateSubseq(arr, index, currSubseq) {
//     if (index === arr.length) {
//         if (isIncreasing(currSubseq)) {
//             longestLen = Math.max(longestLen, currSubseq.length);
//         }
//         return;
//     }
//     generateSubseq(arr, index + 1, currSubseq);
//     generateSubseq(arr, index + 1, currSubseq.concat(arr[index]));
// }

// function ArrayChallenge(arr) {
//     generateSubseq(arr, 0, []);
//     return longestLen;
// }

function solve(n, arr, curr, prev) {
    if(curr === n) return 0;
    let take = 0, nonTake = 0;
    if(arr[curr] > arr[prev] || prev === -1)
        take = 1 + solve(n, arr, curr + 1, curr);
    nonTake = solve(n, arr, curr + 1, prev);
    return Math.max(take, nonTake);
}

function solveTopDown(n, arr, curr, prev, dp) {
    if(curr === n) return 0;
    let take = 0, nonTake = 0;
    if(dp[curr][prev+1] !== -1) return dp[curr][prev+1];
    if(arr[curr] > arr[prev] || prev === -1)
        take = 1 + solve(n, arr, curr + 1, curr, dp);
    nonTake = solve(n, arr, curr + 1, prev, dp);
    dp[curr][prev+1] = Math.max(take, nonTake);
    return dp[curr][prev+1];
}

function solveBottomUp(n, arr) {
    let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    for(let curr = n-1; curr>=0; curr--) {
        for(let prev = curr-1; prev>=-1; prev--) {
            let take = 0, nonTake = 0;
            if(arr[curr] > arr[prev] || prev === -1)
                take = 1 + dp[curr+1][curr+1];
            nonTake = dp[curr + 1][prev + 1];
            dp[curr][prev+1] = Math.max(take, nonTake);
        }
    }
    return dp[0][0];
}

function ArrayChallenge(arr) {
    let n = arr.length;
    // let curr = 0, prev = -1;
    // return solve(n, arr, curr, prev);
    // let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));
    // return solveTopDown(n, arr, curr, prev, dp);
    return solveBottomUp(n, arr);
}

// keep this function call here
let longestLen = 0;
console.log(ArrayChallenge([4, 3, 5, 1, 6])); // Output: 3 , LIS: [3, 5, 6]
longestLen = 0;
console.log(ArrayChallenge([10, 22, 9, 33, 21, 50, 41, 60, 80])); // Output: 6 , LIS: [10, 22, 33, 50, 60, 80]
longestLen = 0;
console.log(ArrayChallenge([3, 10, 2, 1, 20])); // Output: 3 , LIS: [3, 10, 20]
longestLen = 0;
console.log(ArrayChallenge([3, 2])); // Output: 1 , LIS: [3] or [2]
