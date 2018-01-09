

checkNextCell = (row, column, image) => image[row][column + 1] && image[row][column + 1] === 1;
checkPrevCell = (row, column, image) => image[row][column - 1] && image[row][column - 1] === 1;
checkUpperCell = (row, column, image) => image[row - 1] && image[row - 1][column] && image[row - 1][column] === 1;
checkLowerCell = (row, column, image) => image[row + 1] && image[row + 1][column] && image[row + 1][column] === 1;
checkRightUpperCell = (row, column, image) => image[row - 1] && image[row - 1][column + 1] && image[row - 1][column + 1] === 1;
checkLeftUpperCell = (row, column, image) => image[row - 1] && image[row - 1][column - 1] && image[row - 1][column - 1] === 1;
checkRightLowerCell = (row, column, image) => image[row + 1] && image[row + 1][column + 1] && image[row + 1][column + 1] === 1;
checkLeftLowerCell = (row, column, image) => image[row + 1] && image[row + 1][column - 1] && image[row + 1][column - 1] === 1;



var image = [
[1,0,0,1,0,0],
[0,0,1,0,1,0],
[0,0,0,0,0,0],
[1,1,0,0,0,0],
[1,1,1,0,0,0],
[0,1,0,1,1,1],
[0,1,0,1,0,1]
];


const group = {};
let count = 0;

let row = 0;
while (row < image.length) {
	let column = 0;
	while(column < image[row].length) {
		if (image[row][column] === 1) {
			const index = row + '-' + column;
			group[index] = {};

			// next cell
			if (checkNextCell(row, column, image)) {
				group[index][row + '-' + (column + 1)] = true;
			}
			// prev cell
			if (checkPrevCell(row, column, image)) {
				group[index][row + '-' + (column - 1)] = true;
			}
			// upper cell
			if (checkUpperCell(row, column, image)) {
				group[index][(row - 1)+ '-' + column] = true;
			}
			// lower cell
			if (checkLowerCell(row, column, image)) {
				group[index][(row + 1)+ '-' + column] = true;
			}
			// right upper cell
			if (checkRightUpperCell(row, column, image)) {
				group[index][(row - 1)+ '-' + (column + 1)] = true;
			}
			// left upper cell
			if (checkLeftUpperCell(row, column, image)) {
				group[index][(row - 1)+ '-' + (column - 1)] = true;
			}
			// right lower cell
			if (checkRightLowerCell(row, column, image)) {
				group[index][(row + 1)+ '-' + (column + 1)] = true;
			}
			// left lower cell
			if (checkLeftLowerCell(row, column, image)) {
				group[index][(row + 1)+ '-' + (column - 1)] = true;
			}

			if (Object.keys(group[index]).length === 0) { count++; delete group[index]; }
			console.log(Object.keys(group));
			Object.keys(group).forEach(key => {
				if (group[key] && group[key][index]) {
					group[key] = Object.assign(group[key], group[index]);
					delete group[index];
				}
			});
		}
		column++;
	}

	row++;
}


console.log(group);
console.log(count);


// DFS

const isSafe = (matrix, row, col, visited) => row >= 0 && col >= 0 && row < matrix.length && col < matrix[row].length && matrix[row][col] === 1 && !visited[row][col];

const DFS = (matrix, row, col, visited) => {
	const rowNbr = [-1, -1, -1,  0, 0,  1, 1, 1];
	const colNbr = [-1,  0,  1, -1, 1, -1, 0, 1];
	visited[row][col] = true;

	for(let i = 0; i < 8; i++) {
		if (isSafe(matrix, row + rowNbr[i], col + colNbr[i], visited)) {
			DFS(matrix, row + rowNbr[i], col + colNbr[i], visited);
		}
	}
}

const countIslands = (matrix) => {
	const visited = matrix.map(row => row.map(col => false));
	let count = 0;

	matrix.forEach((row, rowIndex) => {
		row.forEach((col, colIndex) => {
			if (matrix[rowIndex][colIndex] === 1 && !visited[rowIndex][colIndex]) {
				DFS(matrix, rowIndex, colIndex, visited);
				count++;
			}
		});
	});
	console.log(visited);
	return count;
}


