const handlers = ( () => {

	const loginHandler = event => {
		event.preventDefault()

		const user = {
			username: $('#username').val(),
			password: $('#userPassword').val(),
			searchWordList: store.searchWordList
		}
		api.logIn(user)
			.then(res => {
				localStorage.setItem('authToken', res.authToken)
				store.user = Object.assign({}, store.user, res.user)
				store.searchWordList = []
				store.loginError = ''
				render.dom()
			})
			.catch(err => {
				console.log(err)
				localStorage.removeItem("authToken")
				store.user.reset()
				store.loginError = 'invalid user credentials'
				login.render()
				$('#username').focus()
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

		store.searchWordList = []
		store.addWordList = null
		store.sortProperty = 'word'
		
		render.dom()
	}

	const createAccountHandler = event => {
		event.preventDefault()
		$newUsername = $('#newUsername')
		$newUserPassword = $('#newUserPassword')
		const newUser = {
			username: $newUsername.val(),
			password: $newUserPassword.val(),
			wordList: store.searchWordList
		}

		api.createAccount(newUser)
			.then(_user => {
				return api.logIn(newUser)
					.then(res => {
						localStorage.setItem('authToken', res.authToken)
						store.user = Object.assign({}, store.user, _user)
						store.searchWordList = []
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
				word.render()
				searchWordList.render()
				$('#js-search-word').focus()
			})
	}

	const addParsedWordsHandler = event => {
		event.preventDefault()
		const parsedWords = store.addWordList.canAdd.map(word => {
			return {
				word: word,
				count: 1
			}
		})

		api.addParsedWords(parsedWords)
			.then(res => {
				parsedWords.forEach(newWord => {
					const existingWord = store.user.wordList.find(w => w.word === newWord.word)
					if (existingWord) {
						if (newWord.assessment) {
							(existingWord.assessment)
								? existingWord.assessment += newWord.assessment
								: existingWord.assessment = newWord.assessment
						}
						if (newWord.count) {
							existingWord.count += newWord.count
						}
					} else {
						store.user.wordList.push(newWord)
					}
				})

			store.dialogBoxScreen = 'hidden'
			store.addWordList = null

			dialogBox.render()
			topNav.render()
			wordList.render()

			})
	}

	const parseTextHandler = event => {
		event.preventDefault()
		
		const textToParse = $('#text-to-parse').val()

		api.parseText(textToParse)
			.then(addWordList => {
				store.addWordList = addWordList
				dialogBox.render()
			})

	}

	const toggleLeftNavHandler = event => {
		$('.left-nav').toggleClass('hidden')
		$('.word-list').toggleClass('indent-for-left-nav')
		$('.top-nav').toggleClass('indent-for-left-nav')
	}

	const showAddWordsDialogHandler = event => {
		store.dialogBoxScreen = ''
		dialogBox.render()
	}

	const closeDialogHandler = event => {
		store.dialogBoxScreen = 'hidden'
		store.addWordList = null
		dialogBox.render()
	}

	const leftNavHandler = event => {
		const $leftNavItem = $(event.currentTarget)
		if ($leftNavItem.parent().data('header') == 'sort') {
			store.sortProperty = $leftNavItem.data('item')
		}
		wordList.render()
	}

	const updateAssessmentValueHandler = event => {
		const $assessmentSlider = $(event.currentTarget)
		$assessmentSlider
			.next('.assessment-value')
			.html($assessmentSlider.val())
	}

	const updateAssessmentHandler = event => {
		const $assessmentSlider = $(event.currentTarget)
		const updatedWord =
		{
			word: $assessmentSlider.data('word'),
			assessment: $assessmentSlider.val()
		}

		api.updateWordAssessment(updatedWord)
			.then(res => {
				const word = store.user.wordList.find(w => w.word === updatedWord.word)
				if (res.status != 200) {
					$assessmentSlider.val(word.assessment)
					return
				}
				word.assessment = updatedWord.assessment
			})
	}

	const createAccountLinkHandler = event => {
		$('#newUsername').focus()
	}

	const removeWordHandler = event => {
		const $wordToRemove = $(event.currentTarget)
		const wordToRemove = $wordToRemove.data('word')

		store.addWordList.canAdd.splice(
			store.addWordList.canAdd.indexOf(wordToRemove), 1)

		if (store.addWordList.canAdd.length === 0) {
			store.addWordList = null
		}

		dialogBox.render()
	}

	const deleteWordHandler = event => {
		const word = $(event.currentTarget).data('word')

		api.deleteWord(word)
			.then(res => {
				store.user.wordList.splice(store.user.wordList.indexOf(
					store.user.wordList.find( w => w.word === word)
				), 1)
		
				wordList.render()
				topNav.render()
			})
			.catch(res => {

			})
	}
	return {
		loginHandler,
		logoutHandler,
		createAccountHandler,
		newUserFocusHandler,
		lookupWordHandler,
		addParsedWordsHandler,
		parseTextHandler,
		toggleLeftNavHandler,
		showAddWordsDialogHandler,
		closeDialogHandler,
		leftNavHandler,
		updateAssessmentValueHandler,
		updateAssessmentHandler,
		createAccountLinkHandler,
		removeWordHandler,
		deleteWordHandler
	}
})()