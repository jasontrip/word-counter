const render = (() => {

	const dom = () => {
		$('#app').html(`
			<main role="main">
				<div class="landing-page">
					<header class="login-screen"></header>

					<div class="landing-page-content-wrapper">
						<div class="oxford-lookup">
							<img class="oxford-logo" src="/img/oxford_logo.svg" />
							<section class="word-and-definition"></section>
							<section class="word-list"></section>
						</div>
						
						<div class="create-account"></div>
					</div>

				</div>
			</main>
		`)
		login.render()
		createAccount.render()
		word.render()
		text.render()
		searchWordList.render()
	}

	return {
		dom
	}
})()