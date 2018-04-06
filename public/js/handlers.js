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
				store.user = Object.assign({}, store.user, res.user)
				console.log(store.user)
				render.dom()
			})
			.catch(err => {
				localStorage.removeItem("authToken")
				store.user.reset()
			})
	}

	const logoutHandler = event => {
		event.preventDefault()
		localStorage.removeItem("authToken")
		store.user.reset()
		store.searchWord = {
			word: "",
			assessment: 0,
			results: []
		}
		
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
						store.user = Object.assign({}, store.user, _user)
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
				if (data.results) {
					store.searchWord.definition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
					
					const	existingWord = store.searchWordList.find(w => w.word === searchWord)
					existingWord
						? existingWord.count++
						: store.searchWordList.push({
								word: searchWord,
								count: 1
							})
				}

				render.dom()
				$('#js-search-word').focus()
			})
	}

	const addTextHandler = event => {
		event.preventDefault()
		console.log('add text')
	}

	const toggleLeftNavHandler = event => {
		$('.left-nav').toggleClass('hidden')
	}

	return {
		loginHandler,
		logoutHandler,
		createAccountHandler,
		newUserFocusHandler,
		lookupWordHandler,
		addTextHandler,
		toggleLeftNavHandler
	}
})()