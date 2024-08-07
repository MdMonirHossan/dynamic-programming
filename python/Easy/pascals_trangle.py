class PascalsTriangle:
    def __init__(self, numOfRows):
        self.numOfRows = numOfRows

    def pascals_triangle(self):
        result = [[1]]

        for i in range(self.numOfRows - 1):
            temp = [0] + result[-1] + [0]   # Adding 0 in the 1st & last position of the array
            row = []

            for j in range(len(result[-1]) + 1):
                row.append(temp[j] + temp[j + 1])
            result.append(row)
            print(result)





pascalsObj = PascalsTriangle(5)
print(pascalsObj.pascals_triangle())