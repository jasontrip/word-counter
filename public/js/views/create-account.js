const createAccount = (() => {

	function render() {
		$('.create-account').html(`
			<form class="create-account-form">
				<h1>Create Account</h1>
				<input type="text"
							 id="newUsername"
							 minlength="1"
							 placeholder="username or email"
							 aria-label="enter username"
							 required />
				<div class="field-validation-feedback"></div>
				<input type="password"
							 id="newUserPassword"
							 minlength="10"
							 maxlength="72"
							 placeholder="password"
							 autocomplete="off" 
							 required />
				<div class="field-validation-feedback"></div>
				<button type="submit" class="js-create-account">Create Account</button>
			</form>
		`)
	}
	return {
		render
	}

})()