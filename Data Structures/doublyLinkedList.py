class Node:
	def __init__(self,value):
		self.value = value
		self.next = None
		self.prev = None

class DoublyLinkedList:
	def __init__(self):
		self.head = None
		self.tail = None
		self.length = 0

	def printList(self):
		array = []
		curr = self.head
		while (curr):
			array.append(curr.value)
			curr = curr.next
		return array

	def append(self, value):
		newNode = Node(value)
		if (self.length == 0):
			self.head = newNode
			self.tail = self.head
		else:
			self.tail.next = newNode
			newNode.prev = self.tail
			self.tail = newNode
		self.length += 1
		return self

	def prepend(self, value):

		newNode = Node(value)
		if (self.length == 0):
			self.head = newNode
			self.tail = newNode
		else:

			self.head.prev = newNode
			newNode.next = self.head
			self.head = newNode
		self.length += 1
		return self

	def insert(self, index, value):
		if (index < 0 or index > self.length):
			return "wrong index"
		if (index == 0):
			return self.prepend(value)
		if (index == self.length):
			return self.append(value)
		
		newNode = Node(value)
		leader = self.traverse(index -1)
		follower = leader.next
		leader.next = newNode
		newNode.next = follower
		newNode.prev = leader
		follower.prev = newNode
		self.length += 1
		return self

	def remove(self, index):
		if (self.length == 0 or index < 0 or index >= self.length):
			return "Nothing to remove"

		if (self.length == 1 and index == 0):
			popped = self.head
			self.head = None
			self.tail = None
			self.length -= 1
			return popped

		if (index == 0):
			popped = self.head
			self.head = self.head.next
			self.head.prev = None
			self.length -= 1
			return popped

		if (index == self.length-1):
			popped = self.tail
			leader = self.traverse(index -1)
			leader.next = None
			self.tail = leader
			self.length -= 1
			return popped

		leader = self.traverse(index - 1)
		popped = leader.next
		follower = popped.next

		leader.next = follower
		follower.prev = leader

		self.length -= 1
		return popped

	def traverse(self, index):
		curr = self.head
		counter = 0
		while (counter != index):
			curr = curr.next
			counter+=1
		return curr

myNewDoublyLL = DoublyLinkedList()
myNewDoublyLL.append(0)
myNewDoublyLL.append(10)
myNewDoublyLL.append(20)
myNewDoublyLL.append(30)
myNewDoublyLL.append(40)
myNewDoublyLL.remove(5)
print(myNewDoublyLL.length)
print(myNewDoublyLL.printList())