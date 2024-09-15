let total = 0;
function sum(...args) {
    total += args.reduce((acc, val) => acc+val, 0);
    const inner = (...innerArgs) => {
        total += innerArgs.reduce((acc, val) => acc+val, 0);
        return inner;
    }
    return inner;
}

sum(1,2,3)(4,5,6)(7,8,9)(10);
console.log(total);