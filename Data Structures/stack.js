class Node {
	constructor(value){
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor(){
		this.top = null
		this.bottom = null
		this.length = 0
	}
	peek(){
		return this.top
	}
	isEmpty(){
		return Boolean(!this.length)
	}
	push(value){
		let newNode = new Node(value)
		if (this.length === 0) {
			this.top = newNode
			this.bottom = newNode
		} else {
			newNode.next = this.top
			this.top = newNode
		}
		this.length++
		return this
	}
	pop(){
		if (this.length === 0) {
			return "Nothing to pop"
		}

		let poppped = this.top
		if (this.length === 1) {
			this.top = null
			this.bottom = null
		} else {
			this.top = this.top.next
		}
		this.length--
		return poppped.value
	}
}

let myStack = new Stack()
