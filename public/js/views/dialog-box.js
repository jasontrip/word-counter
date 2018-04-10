const dialogBox = (() => {

	const parseWordsForm = `
		<form class="add-words-form">
			<textarea id="text-to-parse"></textarea>
			<button class="parse-text">parse</button>
		</form>
	`

	function confirmWordsToAdd() {
		return `
			<div>
				${store.addWordList.canAdd.map(word => {
					return `
						<span class="can-add-word">
							${word}
						</span>`
				}).join('')}
			</div>`
	}

	function render() {
			$('.modal').html(`
				<div class="dialog-box ${store.dialogBoxScreen}">
					<div class="add-words-dialog">
						${(store.addWordList)?confirmWordsToAdd():parseWordsForm}
					</div>
				</div>
				<div class="dark-overlay ${store.dialogBoxScreen}"></div>
			`)
	}

	return {
		render
	}
})()