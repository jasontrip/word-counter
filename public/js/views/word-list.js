const wordList = (() => {

	const render = () => {

		const sorted = utility.sort()

		const wordListHeadings = `
			<div class="word-list-heading">
				<div class="assessment-heading">
					assessment
				</div>
				<div class="word-heading">
					word
				</div>
				<div class="exposures-heading">
					exposures
				</div>
			</div>
		`

		const wordListItems = sorted.map(word => {
			return `
				<div class="word-list-item">
					<div class="assessment">
						<input type="range"
							class="assessment-slider"
							data-word="${word.word}"
							value="${word.assessment?word.assessment:'0'}"/>
						<span class="assessment-value">
							${word.assessment?word.assessment:''}
						</span>
					</div>
					<div class="word">${word.word}</div>
					<div class="exposures">
						<span class="exposure-count">${word.count}</span>
					</div>
				</div>
			`
		}).join('')

		$('main .word-list').html(wordListHeadings + wordListItems)
	}

	return {
		render
	}

})()