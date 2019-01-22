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
		if (self.length == 0):
			return "Nothing to pop"
		else:
			popped = self.data[self.length-1]
			del self.data[self.length-1]
			self.length -= 1
			return popped

	def shift(self):
		if (self.length == 0):
			return "Nothing to shift"
		else:
			popped = self.data[0]
			for i in range(self.length-1):
				self.data[i] = self.data[i+1]
			del self.data[self.length-1]
			self.length -= 1
			return popped

	def unshift(self, value):
		if (self.length == 0):
			self.data[0] = value
		else:
			for i in range(self.length, 0, -1):
				self.data[i] = self.data[i-1]
			self.data[0] = value
		self.length += 1
		return self



mmmArray = myArray()
mmmArray.unshift("heyy")
print(mmmArray.printArray())
print(mmmArray.length)