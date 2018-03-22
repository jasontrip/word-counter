const header = (() => {

	function render() {

		const loggedIn = store.loggedIn
		const userName = `<span class="username">${store.username}</span>`

		const loginScreen = `
			<div class="one-line-login-screen">
				<div class="username">
					<input type="text" id="username" aria-label="enter username" />
				</div>
				<div class="password">
					<label for="userPassword">password:</label>
					<input type="password" id="userPassword" autocomplete="on" />
				</div>
				<button class="js-log-in">
					Log In
				</button>
				<button class="js-create-account">
					Create Account
				</button>
			</div>`

		const logoutScreen = `
			<button class="js-log-out">
				Log Out
			</button>`


		const html = `
			<h1>Words</h1>
			<div class="login-nav">
				${loggedIn? logoutScreen:loginScreen }
			</div>
		`
		$('header').html(html)
	}

	return {
		render
	}
})()

