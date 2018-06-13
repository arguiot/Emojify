addEventListeners(el) {
	const search = el.querySelector(".search")

	const callback = e => {
		const regex = new RegExp(e.currentTarget.value, "i")
		if (e.currentTarget.value == "") {
			el = this.gen(el)
		} else {
			el = this.gen(el, regex)
		}
	}
	search.addEventListener("input", callback)
	search.addEventListener("keydown", callback)
	search.addEventListener("change", callback)
}
