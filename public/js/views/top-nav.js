const topNav = (() => {

	function render() {
		const html = `
			<div class="hamburger"><i class="material-icons hamburger-icon">menu</i></div>
			<div class="current-view">
				${store.user.wordList.length}
				word${(store.user.wordList.length > 1)?'s':''}
			</div>
			<div class="log-out-hover">
					<button class="js-log-out">Logout</button>
			</div>
		`

		$('.top-nav').html(html)

	}

	return {
		render
	}

})()