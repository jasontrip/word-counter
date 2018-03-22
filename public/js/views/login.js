const login = (() => {

	function render() {

		const loggedIn = store.loggedIn

		const loggedOutScreen = `
			<input type="text"
						 id="username"
						 placeholder="username"
						 aria-label="enter username" />
			<input type="password"
						 id="userPassword"
						 placeholder="password"
						 autocomplete="on" />
			<button class="js-log-in">Log In</button>
		`

		const loggedInScreen = `
			<span class="username">${store.username}</span>
			<button class="js-log-out">
				Log Out
			</button>`


		const html = `
			${loggedIn? loggedInScreen:loggedOutScreen }
		`
		$('.login-screen').html(html)
	}

	return {
		render
	}
})()

