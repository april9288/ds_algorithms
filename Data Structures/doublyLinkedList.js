class Node {
	constructor(value){
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor (){
		this.head = null
		this.tail = null
		this.len = 0
	}
	append(value){
		let newNode = new Node(value)
		if (this.len === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}
		this.len++
		return this
	}
	prepend(value){
		let newNode = new Node(value)
		if (this.len === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.len++
		return this
	}
	insert(index,value){
		if (index < 0 || index > this.len) {
			return "Nothing to insert"
		}
		if (this.len === 0 || index === 0) {
			return this.prepend(value)
		}
		if (index === this.len) {
			return this.append(value)
		}
		let newNode = new Node(value)
		let leading = this.traverse(index -1)
		let following = leading.next
		newNode.next = following
		newNode.prev = leading
		leading.next = newNode
		following.prev = newNode
		this.len++
		return this
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
	set(index,value){
		if (index < 0 || index >= this.len) {
			return "Nothing to set"
		}
		let curr = this.traverse(index)
		curr.value = value
		return this
	}
	remove(index){
		if (index < 0 || index >= this.len) {
			return "Nothing to remove"
		}
		let popped
		if (this.len === 1) {
			popped = this.head
			this.head = null
			this.tail = null
		} else if (index === 0) {
			popped = this.head
			this.head = this.head.next
			this.head.prev = null
		} else if (index === this.len-1) {
			popped = this.tail
			this.tail = this.tail.prev
			this.tail.next = null

		} else {
			let leading = this.traverse(index-1)
			popped = leading.next
			let following = popped.next
			leading.next = following
			following.prev = leading
		}

		this.len--
		return popped
	}
	isEmpty(){
		return Boolean(!this.len)
	}
	print(){
		let list = []
		let curr = this.head
		while(curr){
			list.push(curr.value)
			curr = curr.next
		}
		return console.log(list)
	}
}

let myDLL = new DoublyLinkedList()