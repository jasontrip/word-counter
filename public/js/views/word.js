const word = ( () => {

	function render() {

		const user = store.user
		const searchWord = store.searchWord

		let html = `
			<form class="word-lookup">
				<input type="text"
					id="js-search-word"
					placeholder="enter word" />
				<button class="js-lookup-word"> Search
				</button>
			</form>
		`

		if (searchWord.word && searchWord.results.length) {
			html += `
				<div class="js-word-detail">
					${searchWord.word}: ${searchWord.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]}
				</div>
			`
		} else if (searchWord.word && searchWord.results.length === 0) {
			html += `
				<div class="js-word-detail">
					${searchWord.word} is not in the Oxford Dictionary.
				</div>
			`
		}

		$('.word-and-definition').html(html)
	}

	return {
		render
	}

})()