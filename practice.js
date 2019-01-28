class Node {
	constructor(value){
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}

	isEmpty(){
		return Boolean(!this.length)
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
	append(value){
		let newNode = new Node(value)
		if (this.length === 0){
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
		if (this.length === 0){
			this.head = newNode
			this.tail = this.head
		} else {
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
		}

		this.length++
		return this
	}
	insert(index, value){
		if (index < 0 || index > this.length || this.length === 0) {
			return "Nothing to insert"
		}

		if (index === 0) {
			return this.prepend(value)
		}

		if (index === this.length) {
			return this.append(value)
		}

		let newNode = new Node(value)
		let leading = this.traverse(index-1)
		let following = leading.next
		leading.next = newNode
		newNode.next = following
		following.prev = newNode
		newNode.prev = leading
		this.length++
		return this

	}
	set(index, value){
		if (index < 0 || index >= this.length) {
			return "Nothing to set"
		}
		let curr = this.traverse(index)
		curr.value = value
		return this
	}
	traverse(index){
		let curr = this.head
		let counter = 0
		while(counter < index){
			curr = curr.next
			counter++
		}
		return curr
	}
	remove(index){
		let popped
		if (index < 0 || index >= this.length) {
			return "Nothing to remove"
		}
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
			this.tail = this.tail.prev
			this.tail.next = null
		} else {
			let leading = this.traverse(index-1)
			popped = leading.next
			let following = popped.next
			leading.next = following
			following.prev = leading
		}
		this.length--
		return popped
	}

}

let myNewDLL = new DoublyLinkedList()
myNewDLL.append(0)
myNewDLL.append(10)
myNewDLL.append(20)
myNewDLL.append(30)
myNewDLL.append(40)
myNewDLL.remove(5)
myNewDLL.print()