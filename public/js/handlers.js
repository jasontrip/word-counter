const handlers = ( () => {

	const loginHandler = event => {
		event.preventDefault()
		console.log('clicked')
		store.loggedIn = !store.loggedIn
		render()
	}

	const lookupWordHandler = event => {
		event.preventDefault()
		$.ajax('/broken-up-text', {
			method: 'POST',
			data: MOCK_WORD_DATA
		})
		.then(res => {
			console.log(res)
			$('.word-lists').html(res.hello)
		})
	}

	const addTextHandler = event => {
		event.preventDefault()
		console.log('adding text')
	}

	return {
		loginHandler,
		lookupWordHandler,
		addTextHandler
	}
})()