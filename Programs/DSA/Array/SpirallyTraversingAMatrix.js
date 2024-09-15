function SpirallyTraversingAMatrix(mat) {
    let output = [];
    let rowLen = mat.length, colLen = mat[0].length;
    let totalLen = rowLen*colLen;

    let rowTop = 0, rowBottom = rowLen-1, colLeft = 0, colRight = colLen-1;
    while(totalLen) {
        for(let i=rowTop; i<=colRight; i++) {
            output.push(mat[rowTop][i]);
            totalLen--;
        }
        if(!totalLen) break;
        rowTop++;
        for(let i=rowTop; i<=rowBottom; i++) {
            output.push(mat[i][colRight]);
            totalLen--;
        }
        if(!totalLen) break;
        colRight--;
        for(let i=colRight; i>=colLeft; i--) {
            output.push(mat[rowBottom][i]);
            totalLen--;
        }
        if(!totalLen) break;
        rowBottom--;
        for(let i=rowBottom; i>=rowTop; i--) {
            output.push(mat[i][colLeft]);
            totalLen--;
        }
        colLeft++;
    }
    console.log(output.join(" "));
}

let input = 
[
    [1,  2, 3, 4],
    [5,  6, 7, 8],
    [9, 10,11,12],
    [13,14,15,16]
];

SpirallyTraversingAMatrix(input);