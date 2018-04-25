const api = (() => {

	const lookupWord = searchWord => {
		const url = window.location.origin + '/text/lookup-word'
		return axios.post(
			url, 
			{searchWord},
			{headers: {'Authorization': 'Bearer ' + localStorage.authToken}}
		)
		.then(res => res.data)
		// .catch(err => err)
	}

	const parseText = text => {
		const url = window.location.origin + '/text/parse'
		return axios.post(
			url,
			{text},
			{headers: {'Authorization': 'Bearer ' + localStorage.authToken}}
		)
		.then(res => res.data)
	}

	const addParsedWords = words => {
		const url = window.location.origin + '/users/multiple-words'
		return axios.post(
			url,
			{words},
			{headers: {'Authorization': 'Bearer ' + localStorage.authToken}}
		)
		.then(res => res)
		.catch(err => err)
	}

	const updateWordAssessment = word => {
		const url = window.location.origin + '/users/words'
		return axios.put(
			url,
			word,
			{headers: {'Authorization': 'Bearer ' + localStorage.authToken}}
		)
		.then(res => res)
	}

	const createAccount = user => {
		const url = window.location.origin + '/users'
		return axios.post(url, user)
			.then(res => res.data) // success returns a user
	}

	const logIn = user => {
		const url = window.location.origin + '/auth/login'
		return axios.post(url, user)
			.then(res => {
				return res.data
			})
	}

	const deleteWord = word => {
		const url = window.location.origin + '/users/words/' + word
		return axios.delete(
			url,
			{headers: {'Authorization': 'Bearer ' + localStorage.authToken}}
		).then(res => res)
	}

	return {
		lookupWord,
		parseText,
		addParsedWords,
		createAccount,
		logIn,
		updateWordAssessment,
		deleteWord
	}


})()