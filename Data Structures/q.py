



# class Node:
# 	def __init__(self, value):
# 		self.value = value
# 		self.next = None

# class Queue:
# 	def __init__(self):
# 		self.first = None
# 		self.last = None
# 		self.length = 0

# 	def peek(self):
# 		return self.first

# 	def isEmpty(self):
# 		return bool(self.length is 0)

# 	def nq(self,value):
# 		newNode = Node(value)
# 		if (self.length == 0):
# 			self.first = newNode
# 			self.last = newNode
# 		else:
# 			self.last.next = newNode
# 			self.last = newNode
# 		self.length += 1
# 		return self

# 	def dq(self):
# 		if (self.length <= 0):
# 			return None
# 		elif (self.length == 1):
# 			dq = self.first
# 			self.first = None
# 			self.last = None
# 		else:
# 			dq = self.first
# 			self.first = self.first.next

# 		self.length -= 1
# 		return dq



# myQueue = Queue()

