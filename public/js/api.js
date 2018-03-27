const api = (() => {

	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiSmFzb250IiwiZmlyc3ROYW1lIjoiIiwibGFzdE5hbWUiOiIxMjM0In0sImlhdCI6MTUyMTY3NTMxNCwiZXhwIjoxNTIyMjgwMTE0LCJzdWIiOiJKYXNvbnQifQ.4e6e5IWhqV7ajm6GinwlXMMKNPDEACY4t1f6tal2rG4"

	const lookupWord = searchWord => {
		const url = window.location.origin + '/text/lookup-word'
		axios.post(url, searchWord, {headers: {'Authorization': 'Bearer ' + token}})
		.then(res => res)
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