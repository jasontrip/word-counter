const topNav = (() => {

	function render() {
		const html = `
			<div class="hamburger"><i class="material-icons hamburger-icon">menu</i></div>
			<div class="current-view">English > Oxford Dictionary</div>

			<div class="right-nav">
				<div class="userIcon"><i class="material-icons">person</i></div>
			</div>
		`

		$('.top-nav').html(html)

	}

	return {
		render
	}

})()