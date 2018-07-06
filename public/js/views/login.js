const login = (() => {

	function render() {

		const user = store.user

		let html = ''
		if (user.username) {
			html = `
				<form class="log-out-form">
					<span class="username">${user.username}</span>
					<button class="js-log-out">
						Log Out
					</button>
				</form>
			`
		} else {
			html = `
				<form class="log-in-form">
					<input type="text"
								 id="username"
								 placeholder="username"
								 value="test"
								 aria-label="enter username" 
								 required />
					<input type="password"
								 id="userPassword"
								 placeholder="password"
								 value="test123456"
								 autocomplete="on"
								 minlength="10" 
								 required/>
					<button type="submit"
									class="js-log-in">
									Log In
					</button>
				</form>
				<div class="login-error">
					${store.loginError}
				</div>
			`
		}

		$('.login-screen').html(html)
	}

	return {
		render
	}
})()

