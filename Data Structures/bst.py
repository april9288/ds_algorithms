class Node:
	def __init__(self, value):
		self.value = value
		self.right = None
		self.left = None

class BinarySearchTree:
	def __init__(self):
		self.root = None

	def insert(self, value):
		newNode = Node(value)
		if (not self.root):
			self.root = newNode
			return self

		curr = self.root
		while(True):
			if (value < curr.value):
				#left
				if (not curr.left):
					curr.left = newNode
					return self
				curr = curr.left

			elif (curr.value <= value):
				#right
				if (not curr.right):
					curr.right = newNode
					return self
				curr = curr.right

	def lookup(self, value):
		if (not self.root):
			return print("Nothing to lookup")

		curr = self.root
		while(curr):
			if (value < curr.value):
				curr = curr.left
			elif (curr.value < value):
				curr = curr.right
			elif (value == curr.value):
				return print(curr.value)

		return print(False)

myNewTree = BinarySearchTree()
myNewTree.insert(10)
myNewTree.insert(15)
myNewTree.insert(5)
myNewTree.lookup(15)
