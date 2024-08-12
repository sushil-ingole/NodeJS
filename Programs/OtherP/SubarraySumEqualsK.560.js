// TC - O(n^2)
function subarraySum(nums, k) {
    let ans = 0;
    for(let i=0; i<nums.length; i++) {
        let sum = nums[i];
        if(sum === k) ans++;
        for(let j=i+1; j<nums.length; j++) {
            if(sum+nums[j] === k) {
                ans++;
            }
            sum += nums[j];
        }
    }
    return ans;
};

// TC - O(n)
function subarraySumOptimal(nums, k) {
    let sumCount = {};
    sumCount[0] = 1;
    let sum = 0, count = 0;
    for(let num of nums) {
        sum += num;
        let val = sumCount[sum-k];
        if(val > 0) {
            count += val;
        }
        sumCount[sum] ? sumCount[sum] += 1 : sumCount[sum] = 1;
    }
    return count;
}

let nums1 = [1,1,1], k1 = 2; // => 2
let nums2 = [1,2,3], k2 = 3; // => 2
let nums3 = [1,-1,0], k3 = 0; // => 3
let nums4 = [1,-1,0], k4 = 0; // => 3
let nums5 = [100,1,2,3,4], k5 = 6; // => 1
let nums6 = [28,54,7,-70,22,65,-6], k6 = 100; // => 1


// console.log(subarraySum(nums,k));
console.log("nums1: ", subarraySumOptimal(nums1,k1));
console.log("nums2: ", subarraySumOptimal(nums2,k2));
console.log("nums3: ", subarraySumOptimal(nums3,k3));
console.log("nums4: ", subarraySumOptimal(nums4,k4));
console.log("nums5: ", subarraySumOptimal(nums5,k5));
console.log("nums6: ", subarraySumOptimal(nums6,k6));

// APPROACH:
// Initialization:
// Pehle sumCount naam ka ek object (hash map) banate hain jo cumulative sums aur unki frequencies ko store karega.
// sumCount[0] = 1 se initialize karte hain taaki starting se subarray ke cases handle ho sakein.
// sum aur count ko 0 se initialize karte hain. sum cumulative sum ko track karega aur count subarrays ka count karega jo k ke barabar sum karte hain.

// Iterate through the array:
// Har element num ko array nums se iterate karte hain.
// Har iteration mein, sum ko update karte hain by adding current element num.
// Phir check karte hain ki sum - k pehle se hash map sumCount mein hai ya nahi. Agar hai, iska matlab hai ki ek subarray jo k ke barabar sum karta hai, mil gaya.
// Us subarray ke count ko count mein add karte hain.
// Current cumulative sum sum ko hash map sumCount mein update karte hain. Agar pehle se exist karta hai to uska count badhate hain, warna 1 set karte hain.

// Return the result:
// Iteration ke baad count return karte hain jo total subarrays ka count hai jo k ke barabar sum karte hain.

// Explanation with Example:
// Example 1:

// Initialization:

// sumCount = {0: 1} // Initialize to handle subarrays starting from index 0
// sum = 0
// count = 0

// Iterate through the array:
// Iteration 1 (num = 1):
// sum = 0 + 1 = 1
// sum - k = 1 - 2 = -1
// sumCount[-1] does not exist, so count remains 0.
// Update sumCount[sum]: sumCount = {0: 1, 1: 1}

// Iteration 2 (num = 1):
// sum = 1 + 1 = 2
// sum - k = 2 - 2 = 0
// sumCount[0] = 1 exists, so count += 1 => count = 1
// Update sumCount[sum]: sumCount = {0: 1, 1: 1, 2: 1}

// Iteration 3 (num = 1):
// sum = 2 + 1 = 3
// sum - k = 3 - 2 = 1
// sumCount[1] = 1 exists, so count += 1 => count = 2
// Update sumCount[sum]: sumCount = {0: 1, 1: 1, 2: 1, 3: 1}
// Final Result:
// Total count of subarrays summing to k = 2.