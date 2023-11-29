function generatePascalsTriangle(numRows) {
    let triangle = [];

    for (let i = 0; i < numRows; i++) {
        let row = [1]; // The first element in each row is always 1
        if (triangle.length > 0) {
            let lastRow = triangle[triangle.length - 1];
            for (let j = 0; j < lastRow.length - 1; j++) {
                row.push(lastRow[j] + lastRow[j + 1]);
            }
            row.push(1); // The last element in each row is always 1
        }
        triangle.push(row);
    }

    return triangle;
}

// Example: Generate Pascal's Triangle with 5 rows
const numRows = 5;
const result = generatePascalsTriangle(numRows);

// Print the result
for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(" "));
}
