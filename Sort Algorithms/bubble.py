def bubbleSort(array):
	arrayLength = len(array)
	for i in range(arrayLength, 1, -1):
		for j in range(0, i-1):
			if (array[j] > array[j+1]):
				temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
	return array

example1 = [3,2]
example2 = [9,3,7,4,6]

result = bubbleSort(example1)
print(result)