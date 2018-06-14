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

	const menu = el.querySelectorAll(".menu > div")

	const titles = el.querySelectorAll(".emojis > h3")
	const emojis = el.querySelector(".emojis")

	menu.forEach(e => {
		e.addEventListener("click", ev => {
			const target = ev.currentTarget
			const index = [...target.parentElement.children].indexOf(target)

			const topPos = titles[index].offsetTop - emojis.offsetTop

			emojis.scrollTop = topPos
		})
	})
}
