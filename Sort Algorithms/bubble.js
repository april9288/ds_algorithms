//Bubble Sort
const bubbleSort = (list) => {
	const swapFunction = (list, i, j) => {
		[list[i], list[j]] = [list[j], list[i]]
	}
	for (let i = list.length; i > 1; i--) {
		for (let j = 0; j < i -1; j++) {
			if (list[j] > list[j+1]) {
				swapFunction(list, j, j+1)
			}
		}
	}
	return list
}

let example1 = [3,2]
let example2 = [5,7,4,9,1,8]
let result = bubbleSort(example1)
console.log(result)