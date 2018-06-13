createElement() {
		//= ../model.js

		const parser = new DOMParser()

		const html = parser.parseFromString(model, "text/html")

		return html.body
}
