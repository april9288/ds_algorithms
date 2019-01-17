class Node:
	def __init__(self,value):
		self.value = value
		self.next = None

class Stack:
	def __init__(self):
		self.top = None
		self.bottom = None
		self.length = 0

	def peek(self):
		return self.top

	def isEmpty(self):
		return bool(self.length is 0)

myStack = Stack()
print(myStack.isEmpty())