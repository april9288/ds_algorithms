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
			this.last = newNode
		} else {
			this.last.next = newNode
			this.last = newNode
		}
		this.length++
		return this
	}
	dq() {
		let dq
		if (this.length <= 0) {
			return null
		} else if (this.length === 0) {
			dq = this.first
			this.first = null
			this.last = null
		} else {
			dq = this.first
			this.first = this.first.next
		}
		this.length--
		return dq
	}
	isEmpty() {
		return Boolean(!this.length)
	}
}

myQueue = new Queue()
