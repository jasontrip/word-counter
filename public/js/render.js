const render = (() => {

	const dom = () => {
		const user = store.user

		if (user.username) {
			$('#app').html(`
				<div class="modal"></div>
				<nav class="left-nav hidden"></nav>

				<div class="page-wrap">
					<div class="add-circle">
						<i class="material-icons add-icon">add</i>
					</div>

					<header class="top-nav"></header>

					<main>
						<div class="word-list"></div>
					</main>
				</div>
			`)
			topNav.render()
			leftNav.render()
			wordList.render()
		} else {
			$('#app').html(`
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
			`)
			login.render()
			createAccount.render()
			word.render()
			text.render()
			searchWordList.render()
		}
	}

	return {
		dom
	}
})()