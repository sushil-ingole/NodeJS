const array = [1,2,3,4,5];
const arrayDynamic = Array(5).fill();
console.log(arrayDynamic);

const numberOfRows = 5;
const numberOfColumns = 4;

const twoDimArray = Array(numberOfRows).fill();

for(let i=0; i<numberOfRows; i++) {
    twoDimArray[i] = Array(numberOfColumns).fill(9);
}

console.log(twoDimArray);