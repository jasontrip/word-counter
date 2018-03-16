const api = (() => {

	const url = window.location.origin + '/text/lookup-word'

	const lookupWord = searchWord =>
		axios.post(url, searchWord)
		.then(res => res.data)

	const parseText = text => {

	}

	return {
		lookupWord,
		parseText
	}


})()