createElement() {
	//= ../model.js

	const parser = new DOMParser()

	const html = parser.parseFromString(model, "text/html")

	const body = html.body.querySelector(".container")
	const style = html.body.querySelector("style")

	const out = this.gen(body)
	this.addEventListeners(body)
	
	out.appendChild(style)
	return out
}
