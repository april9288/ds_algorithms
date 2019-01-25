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
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}
	prepend(value){
		let newNode = new Node(value)
		if (this.lenght === 0) {
			this.head = newNode
			this.tail = this.head
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}
	insert(index, value) {
		if (index < 0 || index > this.length || this.length === 0) {
			return "Wrong index"
		}
		if (index === 0) {
			return this.prepend(value)
		}
		if (index === this.length) {
			return this.append(value)
		}
		let newNode = new Node(value)
		let curr = this.traverse(index-1)
		newNode.next = curr.next
		curr.next = newNode
		this.length++
		return this
	}
	traverse(index) {
		let curr = this.head
		let counter = 0
		while (counter < index){
			curr = curr.next
			counter++
		}
		return curr
	}
	set(index, value) {
		if (index < 0 || index >= this.length){
			return "Nothing to set"
		}
		let curr = this.traverse(index)
		curr.value = value
		return this
	}
	remove(index) {
		if (this.length === 0 || index < 0 || index >= this.length) {
			return "Nothing to remove"
		}
		let popped
		if (this.length === 1 && index === 0) {
			popped = this.head
			this.head = null
			this.tail = this.head
		} else if (index === 0){
			popped = this.head
			this.head = this.head.next
		} else if (index === this.length-1) {
			popped = this.tail
			let leader = this.traverse(index-1)
			leader.next = null
			this.tail = leader
		} else {
			let leader = this.traverse(index-1)
			popped = leader.next
			leader.next = popped.next
		}
		this.length--
		return popped
	}
	print() {
		let list = []
		let curr = this.head
		while(curr) {
			list.push(curr.value)
			curr = curr.next
		}
		return list
	}
	reverse(){
		let first = this.head
		let second = first.next
		let third = second.next

		first.next = null
		this.tail = first
		while (third) {
			second.next = first
			first = second
			second = third
			third = second.next
		}
		second.next = first
		this.head = second
		return this
	}
}


let myLL = new LinkedList()
// myLL.append(10)
// myLL.prepend(5)
// myLL.append(15)
// myLL.append(20)

// console.log(myLL.print())
// console.log(myLL)