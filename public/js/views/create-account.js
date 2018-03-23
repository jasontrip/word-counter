const createAccount = (() => {

	function render() {
		$('.word-lists').html(`
		<div class="create-account">
			<form class="create-account-form">
				<h1>Create Account</h1>
				<input type="text"
							 id="newUsername"
							 minlength="1"
							 placeholder="username or email"
							 aria-label="enter username"
							 required />
				<input type="password"
							 id="newUserPassword"
							 minlength="10"
							 maxlength="72"
							 placeholder="password"
							 autocomplete="off" 
							 required />
				<span class="field-feedback">&nbsp;</span>
				<button type="submit" class="js-create-account">Create Account</button>
			</form>
		</div>
	`)
	}

	return {
		render
	}

})()