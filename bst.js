class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}
	insert(value) {
		let newNode = new Node(value)
		if (this.root === null) {
			this.root = newNode
		} else {
			let currentNode = this.root
			while(true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode
						return this
					}

					currentNode = currentNode.left
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode
						return this
					}

					currentNode = currentNode.right
				}
			}
		}

	}

	loopup(value){

		if (!this.root) {
			return null
		} else {
			let currentNode = this.root
			while(currentNode) {
				if (value < currentNode.value) {
					currentNode = currentNode.left
				} else if (value > currentNode.value) {
					currentNode = currentNode.right
				} else if (value === currentNode.value) {
					return currentNode
				}
			}
			return null
		}
	}
	remove(){

	}
}

let myTree = new BinarySearchTree()
myTree.insert(5)
myTree.insert(2)
myTree.insert(3)
myTree.insert(6)
myTree.insert(1)
myTree.insert(4)


console.log(myTree.loopup(2))