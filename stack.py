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

	def push(self,value):
		newNode = Node(value)
		if (self.length == 0):
			self.top = newNode
			self.bottom = newNode
		else:
			originalTop = self.top
			self.top = newNode
			newNode.next = originalTop
		self.length += 1
		return self

	def pop(self):
		if (self.length <= 0):
			return None
		elif (self.length == 1):
			popped = self.top.value
			self.top = None
			self.bottom = None
		else:
			popped = self.top.value
			self.top = self.top.next
		self.length -= 1
		return popped



myStack = Stack()
