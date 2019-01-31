class Node:
	def __init__(self,value):
		self.value = value
		self.left = None
		self.right = None

class BTS:
	def __init__(self):
		self.root = None

	def insert(self,value):
		newNode = Node(value)
		if (not self.root):
			self.root = newNode
			return self

		curr = self.root
		while(True):
			if (value < curr.value):
				if (not curr.left):
					curr.left = newNode
					return self
				curr = curr.left

			else:
				if (not curr.right):
					curr.right = newNode
					return self
				curr = curr.right

	def lookup(self,value):
		if (not self.root):
			return "Nothing to lookup"

		curr = self.root
		while(curr):
			if (value == curr.value):
				return print(curr)

			if (value < curr.value):
				curr = curr.left
			else:
				curr = curr.right

		return print(False)

	def breadth(self):
		array = []
		queue = []
		curr = self.root
		queue.append(curr)
		while(True):
			curr = queue.pop(0)
			array.append(curr.value)
			if (curr.left):
				print("left")
				queue.append(curr.left)
			if (curr.right):
				print("right")
				queue.append(curr.right)
			if (len(queue) == 0):
				return print(array)


myTree = BTS()