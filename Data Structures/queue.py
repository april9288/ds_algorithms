class Node:
	def __init__(self, value):
		self.value = value
		self.next = None

class Queue:
	def __init__(self):
		self.first = None
		self.last = None
		self.length = 0

	def isEmpty(self):
		return bool(self.length is 0)

	def peek(self):
		return self.first

	def push(self,value):
		newNode = Node(value)
		if (self.length == 0):
			self.first = newNode
			self.last = self.first
		else:
			self.last.next = newNode
			self.last = newNode
		self.length += 1
		return self

	def pop(self):
		if (self.length == 0):
			return "Nothing to return"

		popped = self.first
		if (self.length == 1):
			self.first = None
			self.last = None
		else:
			self.first = self.first.next

		self.length -= 1
		return popped

myQ = Queue()