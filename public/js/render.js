const render = (() => {

	const dom = () => {
		$('#app').html(`
			<main role="main">
				<section class="lookup-word">
					<header class="login-screen"></header>
					<section class="word-and-definition"></section>
				</section>

				<section class="word-lists">

				</section>
			</main>
		`)
		login.render()
		word.render()
		text.render()
		lists.render()
	}

	return {
		dom
	}
})()