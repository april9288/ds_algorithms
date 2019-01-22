class myArray:
	def __init__(self):
		self.length = 0
		self.data = {}

	def get(self, index):
		return self.data[index] if self.length > 0 else None

	def printArray(self):
		return list(self.data.values())

	def push(self, value):
		self.data[self.length] = value
		self.length += 1
		return self

	def pop(self):
		

	def shift(self):
		pass

	def unshift(self, value):
		pass

mmmArray = myArray()
mmmArray.push(123)
print(mmmArray.printArray())
print(mmmArray.get(0))