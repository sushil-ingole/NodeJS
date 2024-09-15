function findAllTriplets(arr) {
    arr.sort((a, b) => a-b);
    let len = arr.length;
    let count = 0;
    let allTriplets = [];
    for(let k = len-1; k>=2; k--) {
        let i=0;
        let j = k-1;
        while(i < j) {
            let sum = (arr[i] + arr[j]);
            if(sum === arr[k]) {
                count++;
                allTriplets.push([arr[i], arr[j], arr[k]]);
                ++i, --j;
            } else if(sum > arr[k]) {
                --j;
            } else {
                ++i;
            }
        }
    }
    return allTriplets;
}

let arr1 = [1, 2, 3, 4, 5]; // 4
let arr2 = [1, 1, 1, 2, 2]; // 2
console.log(findAllTriplets(arr1), " => ", findAllTriplets(arr1).length);
console.log(findAllTriplets(arr2), " => ", findAllTriplets(arr2).length);
