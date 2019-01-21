class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}
class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}
	append(value){
		let newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {


		}
		this.length++
		return this
	}



}

let myDoubleLL = new DoublyLinkedList()
