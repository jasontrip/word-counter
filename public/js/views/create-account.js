const createAccount = (() => {

	function render() {
		$('.word-lists').html(`
		<div class="create-account">
			<h1>Create Account</h1>
			<input type="text"
						 id="newUsername"
						 placeholder="username or email"
						 aria-label="enter username" />
			<input type="password"
						 id="newUserPassword"
						 placeholder="password"
						 autocomplete="on" />
			<span class="field-feedback">&nbsp;</span>
			<button class="js-create-account">Create</button>
		</div>
	`)
	}

	return {
		render
	}

})()