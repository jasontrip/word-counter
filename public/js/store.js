const store = (() => {

	const reset = function() {
		this.username = "",
		this.firstName = "",
		this.lastName = "",
		this.wordList = []
	}

	const user = {
		username: "",
		firstName: "",
		lastName: "",
		wordList: [],
		reset
	}

	const searchWord = {
		word: "",
		assessment: 0,
		results: []
	}

	return {
		user,
		searchWord
	}
})()