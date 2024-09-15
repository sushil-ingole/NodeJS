function parenthesisChecker(str) {
    if (str.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let val = str[i];
        if ((["}", ")", "]"].some((value) => value === val)) && stack.length === 0) {
            return false;
        }
        if (["{", "(", "["].some((value) => value === val)) {
            stack.push(val);
        } else if (["}", ")", "]"].some((value) => value === val)) {
            let topVal = stack.pop();
            if ((val === "}" && topVal !== "{") ||
                (val === ")" && topVal !== "(") ||
                (val === "]" && topVal !== "[")) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// let str = "{{([])}}";
let str = "([]";
console.log(parenthesisChecker(str));