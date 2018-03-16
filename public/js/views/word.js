const word = ( () => {

	function render() {

		const enteredWord = store.lookupWord.enteredWord
		const lemma = store.lookupWord.lemma
		const definition = store.lookupWord.definition

		const html = `
			<form class="word-lookup">
				<label for="js-word">
					lookup word
				</label><br>
				<input type="text" id="js-search-word" value="${enteredWord}" />
				<button class="js-lookup-word">lookup</button>
			</form>

			<div class="js-word-detail">
				${lemma}: ${definition}
			</div>
		`

		$('.word-and-detail').html(html)
	}

	return {
		render
	}

})()