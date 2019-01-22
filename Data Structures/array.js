class myArray{
	constructor(){
		this.length = 0
		this.data = {}
	}
	get(index){
		return this.data[index]
	}
	push(item){
		this.data[this.length] = item
		this.length++
		return this
	}
	pop(){
		if (this.length !== 0) {
			let popped = this.data[this.length-1]
			delete this.data[this.length-1]
			this.length--
			return popped
		} else {
			return "Nothing to pop"
		}
	}
	shift(){
		if (this.length !== 0) {
			let popped = this.data[0]
			let i = 0
			while(i < this.length) {
				this.data[i] = this.data[i+1]
				i++
			}
			delete this.data[this.length-1]
			this.length--
			return popped
		} else {
			return "Nothing to shift"
		}
	}
	unshift(item){
		if (this.length !== 0) {
			for (let i = this.length; i > 0; i--) {
				this.data[i] = this.data[i-1]
			}
			this.data[0] = item
			this.length++
			return this
		} else if (this.length === 0) {
			this.data[0] = item
		} else {
			return "Nothing to unshift"
		}
	}
	printArray(){
		return Object.values(this.data)
	}
}

let myyyArray = new myArray()