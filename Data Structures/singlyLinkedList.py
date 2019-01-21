class Node:
	def __init__(self,value):
		self.value = value
		self.next = None

class LinkedList:
	def __init__(self):
		self.head = None
		self.tail = None
		self.length = 0

	def append(self,value):
		newNode = Node(value)
		if (self.length == 0):
			self.head = newNode
			self.tail = self.head
		else:
			self.tail.next = newNode
			self.tail = newNode
		self.length += 1
		return self

	def prepend(self,value):
		newNode = Node(value)
		if (self.length == 0):
			self.head = newNode
			self.tail = self.head
		else:
			newNode.next = self.head
			self.head = newNode
		self.length += 1
		return self

	def printList(self):
		currentNode = self.head
		array = []
		while(currentNode):
			array.append(currentNode.value)
			currentNode = currentNode.next
		return array	

	def insert(self, index, value):
		if (index < 0 or index > self.length):
			return "Wrong index"

		if (index == 0):
			self.prepend(value)

		elif (index == self.length):
			self.append(value)

		else:
			newNode = Node(value)
			leader = self.traverse(index - 1)
			newNode.next = leader.next
			leader.next = newNode
			self.length += 1
			return self

	def traverse(self, index):
		currentNode = self.head
		counter = 0
		while(counter != index):
			currentNode = currentNode.next
			counter += 1
		return currentNode

	def remove(self, index):
		if (self.length == 0 or index < 0 or index >= self.length):
			return "Wrong index"

		if (index == 0):
			self.head = self.head.next
		elif (index == self.length - 1):
			leader = self.traverse(index - 1)
			leader.next = None
			self.tail = leader
		else:
			leader = self.traverse(index - 1)
			willBeRemoved = leader.next
			leader.next = willBeRemoved.next
		self.length -= 1
		return self		

myLL = LinkedList()