gen(body, regex=null) {
	const list = this.list

	const keys = Object.keys(list)
	const values = Object.values(list)

	const emojis = body.querySelector(".emojis")
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
			for (let a = 0; i < names.length; i++) {
				if (regex.test(names[a])) {
					emojis.innerHTML += em[a]
				}
			}
		}
	}
	return body
}
