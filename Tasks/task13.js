//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.

let newArr = [12, 22, 32, 42, 52, 62, 72, 82, 92, 102]

let minValue = Infinity
let minIndex
let maxValue = -Infinity
let maxIndex

newArr.every((item, index) => {
	if (item < minValue) {
		minValue = item
		minIndex = index
	}

	if (item > maxValue) {
		maxValue = item
		maxIndex = index
	}
})