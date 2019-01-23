class Node {
	constructor(value){
		this.value = value
		this.next = null
	}
}
class SinglyLL {
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
			this.tail = newNode
		}
		this.length++
		return this
	}
	prepend(value){
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
	insert(index, value){
		if (index < 0 || index > this.length) {
			return "Wrong input"
		}

		if (this.length === 0 || index === this.length) {
			return this.append(value)
		}

		if (index === 0) {
			return this.prepend(value)
		}

		let newNode = new Node(value)
		let leader = this.traverse(index - 1)
		newNode.next = leader.next
		leader.next = newNode
		this.length++
		return this
	}
	remove(index){
		if (this.length === 0 || index < 0 || index >= this.length) {
			return "Nothing to remove"
		}
		if (this.length === 1) {
			let popped = this.head
			this.head = null
			this.tail = this.head
			this.length--
			return popped
		}
		if (index === 0) {
			let popped = this.head
			this.head = this.head.next
			this.length--
			return popped
		}
		if (index === this.length-1) {
			let popped = this.tail
			let leader = this.traverse(index-1)
			leader.next = null
			this.tail = leader
			this.length--
			return popped
		} else {
			let leader = this.traverse(index-1)
			let willBeRemoved = leader.next
			leader.next = willBeRemoved.next
			this.length--
			return willBeRemoved
		}
	}
	traverse(index){
		let curr = this.head
		let counter = 0
		while (counter < index) {
			curr = curr.next
			counter++
		}
		return curr
	}
	isEmpty() {
		return Boolean(!this.length)
	}
	printList() {
		let list = []
		let curr = this.head
		while(curr) {
			list.push(curr.value)
			curr = curr.next
		}
		return list
	}

}

let mylist = new SinglyLL()