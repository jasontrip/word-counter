const dialogBox = (() => {

	const parseWordsForm = `
		<form class="add-words-form">
			<textarea id="text-to-parse"></textarea>
			<button class="parse-text">parse</button>
		</form>
	`

	function confirmWordsToAdd() {
		return `
			<div class="can-add-list">
				${store.addWordList.canAdd.map(word => {
					return `
						<div class="can-add-word">
							<a class="remove-word" data-word="${word}">
								X
							</a>
							${word}
						</div>`
				}).join('')}
			</div>
			<div>
				<button class="add-these-words">
					Add these words
				</button>
			</div>
			`
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