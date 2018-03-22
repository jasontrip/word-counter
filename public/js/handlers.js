const handlers = ( () => {

	const loginHandler = event => {
		event.preventDefault()
		store.loggedIn = true
		render.dom()
	}

	const logoutHandler = event => {
		event.preventDefault()
		store.loggedIn = false
		render.dom()
	}

	const createAccountHandler = event => {
		event.preventDefault()
		console.log('clicked create account')
	}

	const lookupWordHandler = event => {
		event.preventDefault()

		const $target = $(event.currentTarget).prev('#js-search-word')
		const searchWord = $target.val().trim()
		$target.val('')

		api.lookupWord({searchWord})
			.then(res => {
				// store.lookupWord = res.body.lookupWord.enteredWord
				// console.log("looked up: " + store.lookupWord)
				console.log(res)
			})
	}

	const addTextHandler = event => {
		event.preventDefault()
		console.log('add text')
	}

	return {
		loginHandler,
		logoutHandler,
		createAccountHandler,
		lookupWordHandler,
		addTextHandler
	}
})()