//Bubble Sort

//step1: i = arr.length; i > 0; i--
//step2: j = 0; j < i - 1; j++
//swap it list[j] > list[j+1]

const bubbleSort = (list) => {

	const swapFunction = (list, i, j) => {
		[list[i], list[j]] = [list[j], list[i]]
	}


	return list

}

let example1 = [5,4,3,2,1]
let example2 = [6,4,9,2,7]
let result = bubbleSort(example1)
console.log(result)