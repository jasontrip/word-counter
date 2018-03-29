const api = (() => {

	const lookupWord = searchWord => {
		const url = window.location.origin + '/text/lookup-word'
		return axios.post(
			url, 
			{searchWord},
			{headers: {'Authorization': 'Bearer ' + localStorage.authToken}}
		)
		.then(res => res.data)
		.catch(err => err)
	}

	const parseText = text => {

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

	return {
		lookupWord,
		parseText,
		createAccount,
		logIn
	}


})()