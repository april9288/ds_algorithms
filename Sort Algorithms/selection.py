def selectionSort(array):
	for i in range(0, len(array)):
		minimum = i
		for j in range(i+1, len(array)):
			if array[j] < array[minimum]:
				minimum = j

		temp = array[minimum]
		array[minimum] = array[i]
		array[i] = temp

	return print(array)

selectionSort([6,5,0,1])