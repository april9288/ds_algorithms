class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}
class LinkedList {
	constructor(value) {
		this.head = null
		this.tail = null
		this.length = 0
	}
	append(value) {
		let newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}
	prepend(value) {
		let newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = this.head
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}
	printList() {
		let array = []
		let currentNode = this.head
		while(currentNode) {
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		return array
	}
	insert(index, value) {
		if (index < 1) {
			this.prepend(value)
		} else if ( index >= this.length) {
			this.append(value)
		} else {
			let newNode = new Node(value)
			let leader = this.traverse(index - 1)
			newNode.next = leader.next
			leader.next = newNode
			this.length++
			return this
		}
	}
	remove(index) {
		if (this.length === 0 || index >= this.length || index < 0) {
			return "Nothing to remove"
		}

		if (index === 0) {
			this.head = this.head.next
		} else if (index === this.length-1) {
			let leader = this.traverse(this.length-2)
			this.tail = leader
			leader.next = null
		} else {
			let leader = this.traverse(index - 1)
			let currentNode = leader.next
			leader.next = currentNode.next
		}
		this.length--
		return this
	}
	traverse(index) { //O(n)
		let currentNode = this.head
		let counter = 0
		while(counter < index) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
}


let myLL = new LinkedList()
myLL.append(0)
myLL.append(10)
myLL.append(20)
myLL.append(30)
myLL.append(40)
myLL.append(50)
myLL.append(60)

console.log(myLL.printList())
myLL.remove(10)
console.log(myLL.printList())