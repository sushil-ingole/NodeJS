let start = 0, end = -1;
function SubarrayWithGivenSumK_BruteForce(arr, sum) {
    let len = arr.length;
    for(let i=0; i<len; i++) {
        let accSum = 0;
        for(let j=i; j<len; j++) {
            accSum +=  arr[j];
            if(accSum === sum) {
                start = i;
                end = j;
                return true;
            }
        }
    }
    return false;
}

function SubarrayWithGivenSumK_UsingHashMap(arr, sum) {
    let len = arr.length;
    let currSum = 0;
    let map = new Map();
    for(let i=0; i<len; i++) {
        currSum += arr[i];
        if(currSum === sum) {
            start = 0; end = i; break;
        }
        if(map.has(currSum-sum)) {
            start = map.get(currSum-sum) + 1; end = i;
            return true;
        }
        map.set(currSum, i);
    }
    return false;
}

let arr = [10, 15, -5, 15, -10, 5];
let sum = 5;
if(SubarrayWithGivenSumK_UsingHashMap(arr, sum)) {
    console.log(arr.slice(start, end+1));
} else {
    console.log("Not found!");
}