class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue{
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}
	peek() {
		return this.first
	}
	nq(value) {
		let newNode = new Node(value)
		if (this.length === 0) {
			this.first = newNode
			this.last = this.first
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		this.length++
		return this
	}
	dq() {
		if (this.length === 0) {
			return "Nothing to dq"
		}

		let popped
		if (this.length === 1) {
			popped = this.first
			this.first = null
			this.last = null
		} else {
			popped = this.first
			this.first = this.first.next
		}
		this.length--
		return popped
	}
	isEmpty() {
		return Boolean(!this.length)
	}
}

let myQueue = new Queue()