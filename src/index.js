class FastCache {
	constructor() {
		this.list = {}
	}
	set(key,value){
		console.log("hello")
		this.list[key] = value
	}
	get(key) {
		return this.list[key]
	}
}
window.FastCache = FastCache
