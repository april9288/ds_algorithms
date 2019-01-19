//Bubble Sort

const bubbleSort = (list) => {

	const swapFunction = (list, i, j) => {
		[list[i], list[j]] = [list[j], list[i]]
	}

	for (let i = list.length; i > 0; i--) {
		for (let j = 0; j < i -1; j++) {
			if (list[j] > list[j+1]) {
				swapFunction(list, j, j+1)
			}
		}
	}

	return list

}

let example1 = [5,4,3,2,1]
let example2 = [7,5,9,1,8]
let result = bubbleSort(example2)
console.log(result)