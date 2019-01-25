class Node:
	def __init__(self, value):
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
			self.tail = newNode
		else:
			self.tail.next = newNode
			self.tail = newNode

		self.length+=1
		return self

	def prepend(self,value):
		newNode = Node(value)
		if (self.length == 0):
			self.head = newNode
			self.tail = newNode
		else:
			newNode.next = self.head
			self.head = newNode

		self.length+=1
		return self

	def insert(self,index,value):
		if (index < 0 or index > self.length):
			return "Nothing to insert"

		if (index == 0):
			return self.prepend(value)

		if (index == self.length):
			return self.append(value)

		newNode = Node(value)
		leader = self.traverse(index-1)
		newNode.next = leader.next
		leader.next = newNode
		self.length+=1
		return self

	def traverse(self, index):
		curr = self.head
		counter = 0
		while(counter < index):
			curr = curr.next
			counter+=1
		return curr

	def remove(self, index):
		if (index < 0 or index >= self.length):
			return "Nothing to remove"

		poppped = ''
		if (self.length == 1 and index == 0):
			poppped = self.head
			self.head = None
			self.tail = None
		elif(index == 0):
			poppped = self.head
			self.head = self.head.next
		elif(index == self.length-1):
			poppped = self.tail
			leader = self.traverse(index-1)
			leader.next = None
			self.tail = leader
		else:
			leader = self.traverse(index-1)
			poppped = leader.next
			leader.next = poppped.next

		self.length-=1
		return poppped


	def set(self, index, value):
		if (index < 0 or index >= self.length):
			return "Nothing to set"
		curr = self.traverse(index)
		curr.value = value
		return self

	def reverse(self):
		first = self.head
		second = first.next
		third = second.next

		first.next = None
		self.tail = first

		while(third):
			second.next = first

			first = second
			second = third
			third = second.next

		second.next = first
		self.head = second
		return self

	def printValues(self):
		array = []
		curr = self.head
		while(curr):
			array.append(curr.value)
			curr = curr.next
		return print(array)


myLinkedList = LinkedList()

# myLinkedList.prepend(0)
# myLinkedList.append(10)
# myLinkedList.append(20)
# myLinkedList.set(0,"setsetset")
# myLinkedList.insert(0, "inserting")
# myLinkedList.printValues()

# myLinkedList.reverse()


# myLinkedList.printValues()
# print(myLinkedList.length)