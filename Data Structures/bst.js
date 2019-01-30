class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class Tree {
	constructor() {
		this.root = null
	}
	insert(value) {
		let newNode = new Node(value)

		if (this.root === null) {
			this.root = newNode
			return this
		}

		let curr = this.root
		while(true) {
			if (value < curr.value) {
				//left
				if (!curr.left) {
					curr.left = newNode
					return this
				}
				curr = curr.left
			} else {
				//right
				if (!curr.right) {
					curr.right = newNode
					return this
				}
				curr = curr.right
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return "Nothing to lookup"
		}

		let curr = this.root
		while(curr) {
			if (value < curr.value) {
				curr = curr.left
			} else if (value > curr.value) {
				curr = curr.right
			} else if (value === curr.value) {
				return console.log(curr)
			}

		}
		return console.log(false)
	}
}


let myTree = new Tree()