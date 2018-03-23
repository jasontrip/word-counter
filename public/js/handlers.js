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
		const username = $('#newUsername').val()
		store.username = username
		const user = {
			username,
			password: $('#newUserPassword').val()
		}
		
		api.createAccount(user)
			.then(_user => {
				return api.logIn(user)
					.then(authToken => {
						store.loggedIn = true
						store.username = user.username
						render.dom()
					})
			})
			.catch(err => {
				console.log("error: " + err)
			})
	}

	const lookupWordHandler = event => {
		event.preventDefault()
		const $targetUsername = $(event.currentTarget).prev('#js-search-word')
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