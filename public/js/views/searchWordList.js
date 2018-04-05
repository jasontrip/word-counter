const searchWordList = ( () => {

	function render() {

		const {searchWordList} = store

		let html = ""
		for (i=0; i<searchWordList.length; i++) {
			html = html + `
				<div class="word-in-list">
					${searchWordList[i].word}
					<span class="word-count">
						${searchWordList[i].count > 1 ?`(${searchWordList[i].count})`:""}
					</span>
				</div>
			`
		}

		$('.word-list').html(html)
	}

	return {
		render
	}

})()