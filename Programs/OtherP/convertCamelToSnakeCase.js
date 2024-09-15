let input = "thisIsATest"; // Expected OP: This_Is_A_Test
let inpSpl = input.split("");

function isUpperCase(val) {
    return val === val.toUpperCase();
}

for(let i=0; i<inpSpl.length; i++) {
    let val = inpSpl[i];
    if(i === 0 && !isUpperCase(val)) {
        inpSpl[i] = inpSpl[i].toUpperCase();
    } else if(isUpperCase(val)) {
        inpSpl.splice(i, 0, "_");
        i++;
    }
}
console.log(inpSpl.join(""));