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
		
	}
	insert(index, item){

	}
	remove(index){

	}
	printArray(){
		return Object.values(this.data)
	}
}

let mymymymyArray = new myArray()
mymymymyArray.push(0)
mymymymyArray.push(10)
mymymymyArray.push(20)
console.log("shifted value : " , mymymymyArray.shift())
console.log("current array : " , mymymymyArray.printArray())
console.log(mymymymyArray)