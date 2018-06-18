gen(body, regex=null) {
	const list = this.list

	const keys = Object.keys(list)
	const values = Object.values(list)

	const emojis = body.querySelector(".emojis")
	emojis.innerHTML = ""
	for (let i = 0; i < keys.length; i++) {
		const h3 = document.createElement("h3")
		h3.appendChild(document.createTextNode(keys[i]))

		emojis.appendChild(h3)
		const v = values[i]
		const names = Object.keys(v)
		const em = Object.values(v)
		if (regex == null) {
			emojis.innerHTML += em.join("") // not recommended but easy
		} else {
			for (let a = 0; a < names.length; a++) {
				if (regex.test(names[a])) {
					emojis.innerHTML += em[a]
				}
			}
		}
	}
	if (!twemoji) {
		throw "Emojify requires Twemoji to work. Please contact the developer or check the docs for more informations."
	}
	twemoji.parse(body)

	// Emojis events

	const emojiList = emojis.querySelectorAll(".emoji")
	emojiList.forEach(emoji => {
		emoji.addEventListener("click", ev => {
			const unicode = ev.currentTarget.alt
			const pos = this.input.selectionStart

			this.input.value = this.input.value.splice(pos, 0, unicode)
		})
	})
	// Menu events
	let menu = body.querySelectorAll(".menu > div")

	const menu_new = menu[0].parentNode.cloneNode(true)
	menu[0].parentNode.parentNode.replaceChild(menu_new, menu[0].parentNode)

	menu = body.querySelectorAll(".menu > div")
	const titles = body.querySelectorAll(".emojis > h3")

	menu.forEach(e => {
		e.addEventListener("click", ev => {
			const target = ev.currentTarget
			const index = [...target.parentElement.children].indexOf(target)
			const topPos = titles[index].offsetTop - emojis.offsetTop

			emojis.scrollTop = topPos
		})
	})

	return body
}
