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
	const addWordList = null
	const dialogBoxScreen = "hidden"
	const sortProperty = 'word' // word, assessment, exposure


	return {
		user,
		searchWord,
		searchWordList,
		addWordList,
		dialogBoxScreen,
		sortProperty
	}
})()