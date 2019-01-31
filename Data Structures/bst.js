class Node {
	constructor(value){
		this.value = value
		this.left = null
		this.right = null
	}
}

class BST{
	constructor(){
		this.root = null
	}

	breadth(){
		let list = []
		let queue = []
		let curr = this.root
		queue.push(curr)	
		while(true){
			curr = queue.shift()
			list.push(curr.value)

			if (curr.left) {
				queue.push(curr.left)
			}
			if (curr.right) {
				queue.push(curr.right)
			}
			if (queue.length === 0) {
				return console.log(list)
			}
		}
	}

	df_preOrder(){
		let list = []
		function travere(node){
			list.push(node.value)
			if (node.left) {
				travere(node.left)
			}
			if (node.right) {
				travere(node.right)
			}
		}
		travere(this.root)
		return console.log(list)
	}

	insert(value){
		let newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return this
		}
		let curr = this.root
		while(true){
			if (value < curr.value) {
				//left
				if (!curr.left) {
					curr.left = newNode
					return this
				}
				curr = curr.left
			}
			else {
				//right
				if (!curr.right){
					curr.right = newNode
					return this
				}
				curr = curr.right
			}
		}
	}
	lookup(value){

		if (!this.root) {
			return "Nothin to lookup"
		}

		let curr = this.root
		while(curr){
			if (value === curr.value) {
				return console.log(curr)
			}
			if (value < curr.value) {
				curr = curr.left
			} else {
				curr = curr.right
			}
		}

		return console.log(false)

	}
}


let myTree = new BST()