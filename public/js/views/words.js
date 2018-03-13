const words = ( () => {

	function render() {

		const allWords = store.MOCK_WORD_LIST_DATA

		let html = ""
		for (i=0; i<allWords.length; i++) {
			html = html + `
				<div class="word-in-list">
					<span class="lemma">${allWords[i].lemma}</span>
					(${allWords[i].exposures}): ${allWords[i].definition}
				</div>
			`
		}

		$('.word-lists').html(html)
	}

	return {
		render
	}

})()