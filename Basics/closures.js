function add() {
    let a = 10;
    return function sum(b) {
        return a + b;
    }
}

const sum = add();
console.log(sum(5));