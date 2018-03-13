const header = (() => {

	function render() {
		const loggedIn = store.loggedIn
		const html = loggedIn? 'you are logged in': 'not logged in'
		$('.header').html(html)
	}

	return {
		render
	}
})()

