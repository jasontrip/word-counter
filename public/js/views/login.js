const login = (() => {

	function render() {

		const loggedIn = store.loggedIn
		const username = store.user? store.user.username:''

		const loggedOutScreen = `
			<form class="log-in-form">
				<input type="text"
							 id="username"
							 placeholder="username"
							 aria-label="enter username" 
							 required />
				<input type="password"
							 id="userPassword"
							 placeholder="password"
							 autocomplete="on"
							 minlength="10" 
							 required/>
				<button type="submit"
								class="js-log-in">
								Log In
				</button>
			</form>
		`

		const loggedInScreen = `
			<form class="log-out-form">
				<span class="username">${username}</span>
				<button class="js-log-out">
					Log Out
				</button>
			</form>
		`


		const html = `
			${loggedIn? loggedInScreen:loggedOutScreen }
		`
		$('.login-screen').html(html)
	}

	return {
		render
	}
})()

