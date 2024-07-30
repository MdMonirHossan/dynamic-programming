"use strict";
class PascalsTriangle {
    constructor(numOfRows) {
        this.numOfRows = numOfRows;
        this.numOfRows = numOfRows;
    }
    pascalsTriangle() {
        let result = [[1]];
        for (let i = 1; i < this.numOfRows; i++) {
            const lastSubArray = result[result.length - 1];
            let temp = [0, ...lastSubArray, 0];
            let row = [];
            for (let j = 0; j < lastSubArray.length + 1; j++) {
                row.push(temp[j] + temp[j + 1]);
            }
            result.push(row);
        }
        return result;
    }
}
const pascalsObject = new PascalsTriangle(5);
console.log(pascalsObject.pascalsTriangle());
