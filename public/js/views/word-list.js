const wordList = (() => {

	const render = () => {

		const sorted = utility.sort()

		const html = sorted.map(word => {
			return `
				<div class="word-list-item">
					<div class="word">${word.word}</div>
					<div class="assessment">${word.assessment?word.assessment:'not assessed'}</div>
					<div class="exposures">
						<span class="exposure-count">${word.count}</span>
						exposure${(word.count > 1)?'s':''}
					</div>
				</div>
			`
		})

		$('main .word-list').html(html)
	}

	return {
		render
	}

})()