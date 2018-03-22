const api = (() => {

	const url = window.location.origin + '/text/lookup-word'
	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiSmFzb250IiwiZmlyc3ROYW1lIjoiIiwibGFzdE5hbWUiOiIxMjM0In0sImlhdCI6MTUyMTY3NTMxNCwiZXhwIjoxNTIyMjgwMTE0LCJzdWIiOiJKYXNvbnQifQ.4e6e5IWhqV7ajm6GinwlXMMKNPDEACY4t1f6tal2rG4"

	const config = {
		headers: {'Authorization': 'Bearer ' + token}
	}
	const lookupWord = searchWord =>
		axios.post(url, searchWord, config)
		.then(res => res)
		.catch(err => err)

	const parseText = text => {

	}

	return {
		lookupWord,
		parseText
	}


})()