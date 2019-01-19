class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}
class LinkedList {
	constructor(value) {
		let newNode = new Node(value)
		this.head = newNode
		this.tail = this.head
		this.length = 1
	}
	append(value) {
		let newNode = new Node(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	prepend(value) {
		let newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}

	printList() {
		let thisArray = []
		let currentNode = this.head
		while(currentNode !== null) {
			thisArray.push(currentNode.value)
			currentNode = currentNode.next
		}
		return thisArray
	}

	insert(index, value) {
		if (index === 0) {
			this.prepend(value)
		}
		else if (index >= this.length) {
			this.append(value)
		} else {
			let newNode = new Node(value)
			let leader = this.traverse(index-1)
			newNode.next = leader.next
			leader.next = newNode
			this.length++
		}
		return this
	}
	remove(index) {
		if (index === this.length-1) {
			let leader = this.traverse(index-1)
			leader.next = null
			this.tail = leader
			this.length--
		} else if (index === 0) {
			this.head = this.head.next
			this.length--
		} else {
			let leader = this.traverse(index-1)
			let willBeRemoved = leader.next
			leader.next = willBeRemoved.next
			this.length--
		}
		return this
	}
	traverse(index) { //O(n)
		let leader = this.head
		let counter = 0
		while(counter !== index) {
			leader = leader.next
			counter++
		}
		return leader
	}
}


let myLL = new LinkedList(1)