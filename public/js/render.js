const render = (() => {

	const dom = () => {
		const user = store.user

		if (user.username) {
			$('#app').html(`
				<div class="modal"></div>
				<nav class="left-nav hidden"></nav>

				<div class="page-wrap">

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

					<div class="landing-page-content-wrapper">
						<div class="app-explanation-and-oxford clearfix">
							<div class="app-explanation">
								<div class="app-title">Word Counter</div>
								<div class="one-line-explanation">
									<p>Want to know how well you know a language?</p>
									<p>
										Use this app to keep track of all the words you know and rate
										how well you know them.
									</p>
								</div>
								<div class="login-wrapper">
									<header class="login-screen"></header>
								</div>
							</div>

							<div class="screenshots">
								<div class="screenshot-and-explanation">
									<img class="word-list-screenshot" src="../img/word_list.png">
									<p>Log in to see the words you know!</p>
									<p>
										Rate how well you know each word and see how many times you have been
										exposed to it.
									</p>
								</div>

								<div class="screenshot-and-explanation">
									<img class="add-words-screenshot" src="../img/add_words.png">
									<p>Adding words is easy!</p>
									<p>
										Click the green + sign, and paste text into the
										text field. The app will use Google Natural Language Processing to parse the
										words so you can add them to your list.
									</p>
								</div>
							</div>
						</div>
						<div class="create-account"></div>
						<div class="technical-explanation">
							This project is my 2nd of three capstone projects at Thinkful.
							The goal of this project was to create a full-stack application with
							user account creation, JWT authentication and a RESTful API using Node.
							The front-end is
							using JQuery like the first capstone project. Capstone #3 will use a front-end
							framework (React).

							<br>

							<p>
								<a
									href="https://github.com/jasontrip/word-collector"
									target="_blank"
								>
									See the source code on github!
								</a>
							</p>
						</div>
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