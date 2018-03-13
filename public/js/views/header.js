const header = (() => {

	function render() {

		const loggedIn = store.loggedIn
		const userName = `<span class="username">${store.username}</span>`

		const loginButton = `
			<button class="js-log-in">
				Log In
			</button>`

		const logoutButton = `
			<button class="js-log-out">
				Log Out
			</button>`

		const createAccountButton = `
			<button class="js-create-account">
				Create Account
			</button>`


		const html = `
			<h1>Words</h1>
			<div class="login-nav">
				${loggedIn? userName:loginButton}
				${loggedIn? logoutButton:createAccountButton}
			</div>
		`
		$('header').html(html)
	}

	return {
		render
	}
})()

