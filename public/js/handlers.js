const handlers = ( () => {

	const loginHandler = event => {
		event.preventDefault()
		store.loggedIn = true
		render()
	}

	const logoutHandler = event => {
		event.preventDefault()
		store.loggedIn = false
		render()
	}

	const lookupWordHandler = event => {
		event.preventDefault()

		const $target = $(event.currentTarget).prev('#js-search-word')
		const searchWord = $target.val().trim()
		$target.val('')

		api.lookupWord({searchWord})
			.then(data => {
				store.lookupWord = data.lookupWord.enteredWord
				console.log("looked up: " + store.lookupWord)
			})
	}

	const addTextHandler = event => {
		event.preventDefault()
		console.log('add text')
	}

	return {
		loginHandler,
		logoutHandler,
		lookupWordHandler,
		addTextHandler
	}
})()