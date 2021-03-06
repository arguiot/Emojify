addEventListeners(el) {
	const search = el.querySelector(".search")

	const callback = e => {
		const value = e.currentTarget.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		const array = value.split(" ")
		const join = `(${array.join(")(?=.*")})`
		const regex = new RegExp(join, "i")
		console.log(regex)
		if (e.currentTarget.value == "") {
			el = this.gen(el)
		} else {
			el = this.gen(el, regex)
		}
	}
	search.addEventListener("input", callback)
}
