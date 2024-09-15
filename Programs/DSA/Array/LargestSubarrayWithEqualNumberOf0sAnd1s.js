let input = [1,0,1,1,1,0,0];
let largestArr = [];

function LargestSubarrayWithEqualNumberOf0sAnd1s(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let subArr = [];
        let ones = 0, zeroes = 0;
        subArr.push(arr[i]);
        if(arr[i] === 0) zeroes++;
        if(arr[i] === 1) ones++;
        for(let j=i+1; j<arr.length; j++) {
            subArr.push(arr[j]);
            if(arr[j] === 0) zeroes++;
            if(arr[j] === 1) ones++;
        }
        if(ones === zeroes && subArr?.length > largestArr?.length) {
            largestArr = subArr;
        }
    }
    return largestArr;
}

function LargestSubarrayWithEqualNumberOf0sAnd1sUsingHashMap(arr) {
    let sum = 0, len = 0;
    let mp = new Map();
    mp.set(0, -1);
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            sum += -1;
        } else {
            sum += 1;
        }
        if(mp.has(sum)) {
            let currIndex = mp.get(sum);
            len = Math.max(len, i-currIndex);
        } else {
            mp.set(sum, i);
        }
    }
    return len;
}

LargestSubarrayWithEqualNumberOf0sAnd1s(input);
console.log(`The largest contiguous subarray with = number of 0s and 1s is: [${largestArr}] , with length: "${largestArr.length}".`);

console.log(`The largest contiguous subarray with = number of 0s and 1s is of length: ${LargestSubarrayWithEqualNumberOf0sAnd1sUsingHashMap(input)}`);