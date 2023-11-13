var trashIcons = document.querySelectorAll(".fa-trash")
var favoriteIcons = document.querySelectorAll(".fa-heart")

trashIcons.forEach(function (icon) {
	icon.addEventListener("click", function () {
		// Find the parent 'li' element // used chatgpt to xplain this to me
		const liElement = this.closest("li.resources")
		// Extract the title from the first span within 'resource-content' div
		const fullText = liElement.querySelector(
			".resource-content span:first-of-type"
		).innerText

		const title = fullText.split(": ")[1] // Splits the string at ": " and takes the second part

		fetch("/resources", {
			method: "delete",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: title }),
		}).then(function (response) {
			window.location.reload()
		})
	})
})

favoriteIcons.forEach(function (icon) {
	icon.addEventListener("click", function () {
		// Find the parent 'li' element
		const liElement = this.closest("li.resources")
		const fullText = liElement.querySelector(
			".resource-content span:first-of-type"
		).innerText
		const title = fullText.split(": ")[1] // Splits the string at ": " and takes the second part
		const isFavorite = liElement.classList.contains("favorite")

		fetch("/updateFavorite", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				title: title,
				favorite: !isFavorite,
			}),
		})
			.then((response) => {
				if (response.ok) return response.json()
			})
			.then((data) => {
				window.location.reload()
			})
	})
})
