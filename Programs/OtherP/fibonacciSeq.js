// The Fibonacci sequence is a series of numbers where each number (called a Fibonacci number) is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes on infinitely.

// Fibonacci Sequence Example:
// The first two numbers are 0 and 1.
// The third number is  0 + 1 = 1, 0+1=1. 
// The fourth number is  1 + 1 = 2, 1+1=2.
// The fifth number is  1 + 2 = 3, 1+2=3.
// The sixth number is 2 + 3 = 5, 2+3=5.
// And so on...

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