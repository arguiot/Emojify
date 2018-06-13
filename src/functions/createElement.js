createElement() {
		//= ../model.js

		const parser = new DOMParser()

		const html = parser.parseFromString(model, "text/html")

		const out = this.gen(html.body)
		this.addEventListeners(out)
		return out
}
