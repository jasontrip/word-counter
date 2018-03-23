const lists = ( () => {

	function render() {

		const loggedIn = store.loggedIn

		if (!loggedIn) {
			createAccount.render()

		} else {
				const wordList = store.wordList

				let html = ""
				for (i=0; i<wordList.length; i++) {
					html = html + `
						<div class="word-in-list">
							<span class="lemma">${wordList[i].lemma}</span>
							(${wordList[i].exposures}): ${wordList[i].definition}
						</div>
					`
				}

				$('.word-lists').html(html)
			}
		}

	return {
		render
	}

})()