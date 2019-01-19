def bubbleSort(array):

	arrayLength = len(array)
	for i in range(arrayLength, 1, -1):
		print(f'upper loop i is {i}')
		for j in range(0, i-1):
			print(f'i is {i} and j is {j}')
			if (array[j] > array[j+1]):
				temp= array[j]
				array[j] = array[j+1]
				array[j+1] = temp


	return array


example1 = [5,4,8,2,1,5,3,9]
example2 = [9,3,7,4,6]

result = bubbleSort(example1)
print(result)