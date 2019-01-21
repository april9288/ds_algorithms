class Node {
	constructor(value){
		this.value = value
		this.next = null
		this.prev = null
	}
}
class DoublyLinkedList {
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}
	append(value){
		let newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return this
	}
	prepend(value){
		let newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}
	insert(index, value){
		if (index < 0 || index > this.length) {
			return "Wrong index"
		} 

		if (index === 0) {
			return this.prepend(value)
		}

		if (index === this.length) {
			return this.append(value)
		}

		let newNode = new Node(value)
		let leader = this.traverse(index-1)
		let follower = leader.next

		newNode.next = follower
		newNode.prev = leader
		follower.prev = newNode
		leader.next = newNode

		this.length++
		return this
	}
	remove(index){
		if (this.length === 0 || index < 0 || index >= this.length) {
			return "Wrong index value"
		}

		let popped
		if (this.length === 1) {
			popped = this.head
			this.head = null
			this.tail = null
		} else if (index === 0) {
			popped = this.head
			this.head = this.head.next
			this.head.prev = null
		} else if (index === this.length-1) {
			popped = this.tail
			let leader = this.traverse(index-1)
			leader.next = null
			this.tail = leader
		} else {
			let leader = this.traverse(index-1)
			let willBeRemoved = leader.next
			let follower = willBeRemoved.next

			leader.next = follower
			follower.prev = leader
		}

		this.length--
		return popped
	}
	traverse(index){
		let curr = this.head
		let counter = 0
		while (counter != index) {
			curr = curr.next
			counter++
		}
		return curr
	}
	printArray(){
		let list = []
		let curr = this.head
		while (curr) {
			list.push(curr.value)
			curr = curr.next
		}
		return list
	}
}


let myDoubleLL = new DoublyLinkedList()