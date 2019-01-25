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

	def isEmpty(self):
		return bool(self.length is 0)

	def log(self):
		array = []
		curr = self.head
		while (curr):
			array.append(curr.value)
			curr = curr.next
		return print(array)

	def append(self, value):
		newNode = Node(value)
		if (self.length == 0):
			self.head = newNode
			self.tail = newNode
		else:
			newNode.prev = self.tail
			self.tail.next = newNode
			self.tail = newNode

		self.length += 1
		return self

	def prepend(self, value):
		newNode = Node(value)
		if (self.length == 0):
			self.head = newNode
			self.tail = newNode
		else:
			newNode.next = self.head
			self.head.prev = newNode
			self.head = newNode

		self.length += 1
		return self

	def insert(self, index, value):
		if (index < 0 or index > self.length):
			return "Nothing to insert"

		if (self.length == 0 or index == self.length):
			return self.append(value)

		if (index == 0):
			return self.prepend(value)

		newNode = Node(value)
		leading = self.traverse(index-1)
		following = leading.next

		newNode.prev = leading
		newNode.next = following
		leading.next = newNode
		following.prev = newNode
		self.length+=1
		return self

	def traverse(self, index):
		curr = self.head
		counter = 0
		while(counter < index):
			curr = curr.next
			counter+=1
		return curr

	def set(self, index, value):
		if (index < 0 or index >= self.length):
			return "Nothing to set"

		curr = self.traverse(index)
		curr.value = value
		return self

	def remove(self, index):
		if (index < 0 or index >= self.length):
			return "Nothing to remove"

		popped = ''
		if (self.length==1):
			popped = self.head
			self.head = None
			self.tail = None
		elif (index == 0):
			popped = self.head
			self.head = self.head.next
			self.head.prev = None
		elif (index == self.length-1):
			popped = self.tail
			self.tail = self.tail.prev
			self.tail.next = None
		else:
			leading = self.traverse(index-1)
			popped = leading.next
			following = popped.next

			leading.next = following
			following.prev = leading


		self.length-=1
		return popped

myNewDLL = DoublyLinkedList()