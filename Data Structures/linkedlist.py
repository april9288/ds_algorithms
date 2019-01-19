class Node:
	def __init__(self,value):
		self.value = value
		self.next = None

class LinkedList:
	def __init__(self,value):
		newNode = Node(value)
		self.head = newNode
		self.tail = self.head
		self.length = 1

	def append(self,value):
		newNode = Node(value)
		self.tail.next = newNode
		self.tail = newNode
		self.length += 1
		return self

	def prepend(self,value):
		newNode = Node(value)
		newNode.next = self.head
		self.head = newNode
		self.length += 1
		return self

	def printList(self):
		array = []
		counter = 0
		currentNode = self.head
		while (counter != self.length):
			array.append(currentNode.value)
			currentNode = currentNode.next
			counter += 1
		return array

	def insert(self, index, value):
		if index == 0:
			self.prepend(value)
		elif index >= self.length:
			self.append(value)
		else:
			newNode = Node(value)
			leader = self.traverse(index-1)
			newNode.next = leader.next
			leader.next =newNode
			self.length += 1
			return self

	def traverse(self, index):
		leader = self.head
		counter = 0
		while(counter != index):
			leader = leader.next
			counter +=1
		return leader

	def remove(self, index):
		if index == 0:
			self.head = self.head.next
			self.length -= 1
		elif index == self.length-1:
			leader = self.traverse(index-1)
			leader.next = None
			self.tail = leader
			self.length -= 1
		elif index >= self.length:
			return print("Wrong Index. Try again")
		else:
			leader = self.traverse(index-1)
			willBeRemoved = leader.next
			leader.next =willBeRemoved.next
			self.length -=1

		

myLL = LinkedList(5)