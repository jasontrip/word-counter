const word = ( () => {

	function render() {

		const user = store.user
		const searchWord = store.searchWord

		let html = `
			<form class="word-lookup">
				<input type="text"
					id="js-search-word"
					placeholder="search the Oxford Dictionary" />
				<button class="js-lookup-word"> Search
				</button>
			</form>
		`

		if (searchWord.word && searchWord.definition) {
			html += `
				<div class="js-word-detail">
					<span class="searched-word">${searchWord.word}</span> -
						${searchWord.definition}
				</div>
			`
		} else if (searchWord.word && !searchWord.definition) {
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