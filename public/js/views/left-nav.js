const leftNav = (() => {

	function render() {

		const html = `
			<div class="left-nav-title">
				<div class="left-nav-title-text">
					WORD COLLECTOR
				</div>
			</div>
			<ul class="menu-level-1">
				<li> <div class="nav-header">Sort</div>
					<ul class="menu-level-2" data-header="sort">
						<li data-item="word">Word</li>
						<li data-item="assessment">Assessment</li>
						<li data-item="exposure">Exposure</li>
					</ul>
				</li>

				<li><div class="nav-header">Context</div>
					<ul class="menu-level-2" data-header="Context">
						<li data-item="oxford">Oxford Dictionary</li>
						<li data-item="unknown">Unknown</li>
					</ul>
				</li>
		`


		$('.left-nav').html(html)
	}

	return {
		render
	}

})()