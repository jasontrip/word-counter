const wordList = (() => {

	const render = () => {
		const html = `
			<div class="word-list-item">
				<div class="word">cat</div>
				<div class="assessment">100%</div>
				<div class="exposures">
					<span class="exposure-count">25</span> exposures
				</div>
			</div>

			<div class="word-list-item">
				<div class="word">dog</div>
				<div class="assessment">100%</div>
				<div class="exposures">
					<span class="exposure-count">57</span> exposures
				</div>
			</div>

			<div class="word-list-item">
				<div class="word">jettison</div>
				<div class="assessment">83%</div>
				<div class="exposures">
					<span class="exposure-count">12</span> exposures
				</div>
			</div>
		`

		$('main .word-list').html(html)
	}

	return {
		render
	}

})()