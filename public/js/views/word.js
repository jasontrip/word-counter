const word = ( () => {

	function render() {

		const {error, enteredWord, lemma, definition} = store.lookupWord

		const errorOrDefinition = error
			? error
			: `${lemma}: ${definition}`

		const html = `
			<form class="word-lookup">
				<input type="text"
					id="js-search-word"
					placeholder="expand" />
				<button class="js-lookup-word"> Search
				</button>
			</form>

			<div class="js-word-detail">
				${lemma ? errorOrDefinition : ""}
			</div>
		`

		$('.word-and-definition').html(html)
	}

	return {
		render
	}

})()