class PascalsTriangle {
  constructor(private readonly numOfRows: number) {
    this.numOfRows = numOfRows;
  }

  pascalsTriangle() {
    let result: number[][] = [[1]];
    for (let i = 1; i < this.numOfRows; i++) {
      const lastSubArray: number[] = result[result.length - 1];
      let temp: number[] = [0, ...lastSubArray, 0];
      let row: number[] = [];
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
