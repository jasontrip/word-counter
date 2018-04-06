const leftNav = (() => {

	function render() {

		const html = `
			<div class="left-nav-title">
				<div class="left-nav-title-text">
					WORD COLLECTOR
				</div>
			</div>
			<ul class="menu-level-1">
				<li> <div class="nav-header">Language</div>
					<ul class="menu-level-2">
						<li>English</li>
						<li>Spanish</li>
					</ul>
				</li>

				<li><div class="nav-header">Context</div>
					<ul class="menu-level-2">
						<li>Oxford Dictionary</li>
						<li>Unknown</li>
					</ul>
				</li>

				<li><div class="nav-header">Lists</div>
					<ul class="menu-level-2">
						<li>My Learning List</li>
						<li>physics words (shared with John)</li>
					</ul>
				</li>
		`


		$('.left-nav').html(html)
	}

	return {
		render
	}

})()