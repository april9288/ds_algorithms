class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}
	isEmpty() {
		return Boolean(!this.length)
	}
	append(value){
		let newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = this.head
		}

		this.length++
		return this
	}
	prepend(value){
		let newNode = new Node(value)
		if (this.lenght === 0) {
			this.head = newNode
			this.tail = this.head
		}

		this.length++
		return this
	}
}


let myLL = new LinkedList()
console.log(myLL)