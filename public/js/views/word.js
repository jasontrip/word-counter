const word = ( () => {

	function render() {

		const {error, enteredWord, lemma, definition} = store.lookupWord

		const errorOrDefinition = error
			? error
			: `${lemma}: ${definition}`

		const html = `
			<form class="word-lookup">
				<label for="js-word">
					lookup word
				</label><br>
				<input type="text"
					id="js-search-word"
					placeholder="abates" />
				<button class="js-lookup-word">lookup</button>
			</form>

			<div class="js-word-detail">
				${lemma ? errorOrDefinition : ""}
			</div>
		`

		$('.word-and-detail').html(html)
	}

	return {
		render
	}

})()