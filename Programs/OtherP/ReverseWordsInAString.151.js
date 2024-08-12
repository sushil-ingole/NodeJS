function reverseWordsInAStringUsingInBuildMethods(str) {
    let splittedStr = str.split(' ');
    let reversedStr = splittedStr.reverse();
    return reversedStr.join(" ");
}

function reverseWordsInAStringWithoutSplitMethod(str) {
    let reversedStr = [];
    let tempStr = "";
    for(let val of str) {
        if(val === " ") {
            reversedStr.push(tempStr);
            tempStr = "";
        }
        tempStr += val;
    }
    reversedStr = reversedStr.reverse();
    return reversedStr.join(" ");
}

function reverseWordsInAStringWithoutSplitReverseJoinMethod(str) {
    let reversedStr = "";
    let tempStr = "";
    for(let i=str.length-1; i>=0; i--) {
        if(str[i] === " ") {
            reversedStr = reversedStr.concat(tempStr + " ");
            tempStr = "";
        } else {
            tempStr = str[i] + tempStr;
        }
    }
    reversedStr = reversedStr.concat(tempStr);
    return reversedStr;
}

// In the above functions keep only one space rule is not followed.
function reverseWords(s) {
    let revStr = "";
    let tempStr = "";

    // Traverse the string in reverse and build the reversed words
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ') {
            revStr += tempStr + " ";
            tempStr = "";
        } else {
            tempStr = s.charAt(i) + tempStr;
        }
    }

    revStr += tempStr;

    let start = 0, end = 0;
    let sfound = false;

    // Remove extra spaces
    while (end <= revStr.length) { // Go until end == revStr.length
        if ((revStr[end] !== ' ' || end === revStr.length) && sfound) { // (Found noSpace character after space found before | curr character length reached revStr.length) AND space is already found previously.
            let numOfSpaces = end - start;
            if (numOfSpaces > 1 && (start !== 0 && end !== revStr.length)) { // Remove spaces found in-between with keeping one space.
                revStr = revStr.slice(0, start) + revStr.slice(start + numOfSpaces - 1);
                end = end - numOfSpaces; // Reset end as numOfSpaces after erase affects end index.
            } else if (start === 0 || end === revStr.length) { // Remove all spaces from starting or ending.
                revStr = revStr.slice(0, start) + revStr.slice(start + numOfSpaces);
                end = end - numOfSpaces; // Reset end as numOfSpaces after erase affects end index.
            }
            start = end; // Start will start from end now.
            sfound = false; // As all spaces removed the curr char is not a space now, so set sfound to false.
        } else { // (curr char is space | curr char is != revStr.length) | space is not found.
            if (revStr[end] === ' ') { // curr char is a space.
                if (!sfound) start = end; // If space was not found previously just now found, so set start to end, i.e. spaces are starting for the curr index now.
                sfound = true;
            } else {
                sfound = false;
            }
        }
        end++;
    }

    return revStr;
}

let str1 = "I love programming";
let str2 = "      much very program    this like I     ";
console.log("str1: " + str1 + " ====> reversed str1: '" + reverseWords(str1) + "' + len: " + reverseWords(str1).length);
console.log("str2: " + str2 + " ====> reversed str2: '" + reverseWords(str2) + "' + len: " + reverseWords(str2).length);