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
		
	}

	const addTextHandler = event => {
		event.preventDefault()
		console.log('adding text')
	}

	return {
		loginHandler,
		logoutHandler,
		lookupWordHandler,
		addTextHandler
	}
})()