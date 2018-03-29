const handlers = ( () => {

	const loginHandler = event => {
		event.preventDefault()

		const user = {
			username: $('#username').val(),
			password: $('#userPassword').val()
		}
		api.logIn(user)
			.then(res => {
				localStorage.setItem('authToken', res.authToken)
				store.user = res.user

				render.dom()
			})
			.catch(err => {
				localStorage.removeItem("authToken")
				store.loggedIn = false
				store.user = {}
			})
	}

	const logoutHandler = event => {
		event.preventDefault()
		localStorage.removeItem("authToken")
		delete store.user
		delete store.searchWord
		
		render.dom()
	}

	const createAccountHandler = event => {
		event.preventDefault()
		$newUsername = $('#newUsername')
		$newUserPassword = $('#newUserPassword')
		const user = {
			username: $newUsername.val(),
			password: $newUserPassword.val()
		}

		api.createAccount(user)
			.then(_user => {
				return api.logIn(user)
					.then(res => {
						localStorage.setItem('authToken', res.authToken)
						store.user = _user
						render.dom()
					})
			})
			.catch(err => {
				const message = err.response.data.message
				if (err.response.data.location === 'username') {
					$newUsername.next('.field-validation-feedback').html(message)
				} else if (err.response.data.location === 'password') {
					$newUserPassword.next('.field-validation-feedback').html(message)
				}
			})
	}

	const newUserFocusHandler = event => {
		$(event.currentTarget).next('.field-validation-feedback').html('')
	}

	const lookupWordHandler = event => {
		event.preventDefault()
		const $searchWord = $(event.currentTarget).prev('#js-search-word')
		const searchWord = $searchWord.val().trim()
		$searchWord.val('')

		store.searchWord = {word: searchWord}
		api.lookupWord(searchWord)
			.then(data => {
				store.searchWord.results = data.results
				store.user = data.user

				render.dom()
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
		newUserFocusHandler,
		lookupWordHandler,
		addTextHandler
	}
})()