function mergeTwoSortedArr(arr1, arr2) {
    let len1 = arr1.length, len2 = arr2.length;
    let maxLen = len1 > len2 ? len1 : len2;
    let mergedArr = [];
    let i=0, j=0;
    while(i<len1 && j<len2) {
        if(arr1[i] <= arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while(i<len1) {
        mergedArr.push(arr1[i]); i++;
    }
    while(j<len2) {
        mergedArr.push(arr2[j]); j++;
    }
    console.log("mergedArr: ", mergedArr);
}


// let arr1 = [1, 3, 4, 5], arr2 = [2, 4, 6, 8]; // [ 1, 2, 3, 4, 4, 5, 6, 8 ]
let arr1 = [5, 8, 9], arr2 = [4, 7, 8]; // [ 4, 5, 7, 8, 8, 9 ]
mergeTwoSortedArr(arr1, arr2);