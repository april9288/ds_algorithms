class Node:
	def __init__(self,value):
		self.value = value
		self.next = None

class Stack:
	def __init__(self):
		self.top = None
		self.bottom = None
		self.length = 0

	def isEmpty(self):
		return bool(self.length is 0)

	def peek(self):
		return self.top

	def push(self, value):
		newNode = Node(value)
		if (self.length == 0):
			self.top = newNode
			self.bottom = newNode
		else:
			newNode.next = self.top
			self.top = newNode
		self.length += 1
		return self

	def pop(self):
		if (self.length == 0):
			return "Nothing to return"

		popped = self.top
		if (self.length == 1):
			self.top = None
			self.bottom = None
		else:
			self.top = self.top.next

		self.length -= 1
		return popped


myStack = Stack()
