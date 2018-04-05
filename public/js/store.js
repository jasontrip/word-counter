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
		definition: ""
	}

	const searchWordList = []

	return {
		user,
		searchWord,
		searchWordList
	}
})()