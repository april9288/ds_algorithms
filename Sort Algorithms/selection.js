const selectionSort = (list) => {
	const convert = (list, i, j) => {
		[list[i], list[j]] = [list[j],list[i]]
	}

	for (let i = 0; i < list.length; i++) {
		let minimum = i
		for (let j = i+1; j < list.length; j++) {
			if (list[j] < list[minimum]) {
				minimum = j
			}
		}
		convert(list, i, minimum)
	}

	return console.log(list)
}

let sample = [6,5,4,3,2,1]
selectionSort(sample)