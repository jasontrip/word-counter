const searchWordList = ( () => {

	function render() {

		const {searchWordList} = store

		let wordsHtml = ""
		for (i=0; i<searchWordList.length; i++) {
			wordsHtml = wordsHtml + `
				<div class="word-in-list">
					${searchWordList[i].word}
					<span class="word-count">
						${searchWordList[i].count > 1 ?`(${searchWordList[i].count})`:""}
					</span>
				</div>
			`
		}

		function createAccountWithWordsHtml() {
			
			if (searchWordList.length > 0) {
				return `
					<div class="create-account-invitation">
						Want to save
							${(searchWordList.length === 1)?'this':'these'}
							word${(searchWordList.length === 1)?'':'s'}?
						<a class="create-account-link">
							Create an account!
						</a>
					</div>
				`

			}
			return ""
		}


		$('.word-list').html(wordsHtml + createAccountWithWordsHtml())
	}

	return {
		render
	}

})()