const utility = ( () => {

	const sort = () => {

		const wordListCopy = store.user.wordList.slice()
		switch (store.sortProperty) {
			case 'word': return wordListCopy.sort((a,b) => {
					if (a.word.toUpperCase() < b.word.toUpperCase()) {
						return -1
					}
					if (a.word.toUpperCase() > b.word.toUpperCase()) {
						return 1
					}
					return 0
			})
			case 'exposure': return wordListCopy.sort((a,b) => {
					return a.count - b.count
			})
			case 'assessment': return wordListCopy.sort((a,b) => {
					return a.assessment - b.assessment
			})
		}

	}

	return {
		sort
	}
})()