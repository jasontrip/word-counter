const word = ( () => {

	function render() {

		const lookupWord = store.MOCK_WORD_DATA.word
		const definition = store.MOCK_WORD_DATA.definition

		const html = `
			<form class="js-word-lookup">
				<label for="js-word">
					lookup word
				</label><br>
				<input type="text" id="js-word" value="${lookupWord}" />
				<button class="js-lookup-word">lookup</button>
			</form>

			<div class="js-word-detail">
				${definition}
			</div>
		`

		$('.word-and-detail').html(html)
	}

	return {
		render
	}

})()