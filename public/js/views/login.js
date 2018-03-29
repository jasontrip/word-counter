const login = (() => {

	function render() {

		const user = store.user

		let html = ''
		if (user) {
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
		}

		$('.login-screen').html(html)
	}

	return {
		render
	}
})()

