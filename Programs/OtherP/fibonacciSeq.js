(function fibonacciSeq() {
    let n = 10;
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;
    console.log(n1);
    console.log(n2);
    while (n3 < n) {
        n3 = n1 + n2;
        if (n3 < n) {
            console.log(n3);
        }
        n1 = n2;
        n2 = n3;
    }
})();