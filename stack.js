class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}
	peek(){
		return this.top
	}
	push(value){
		let newNode = new Node(value)
		if (this.length === 0) {
			this.top = newNode
			this.bottom = newNode
		} else {
			let originalTop = this.top
			this.top = newNode
			this.top.next = originalTop
		}
		this.length++
		return this
	}
	pop(){
		let popped
		if (this.top) {
			popped = this.top.value
		} 

		if (this.length > 1) {
			this.top = this.top.next
		} else if (this.length === 1) {
			this.bottom = null
			this.top = null
		} else {
			return null
		}
		this.length--
		return popped
	}
	isEmpty(){
		return Boolean(!this.length)
	}
}

let myStack = new Stack()