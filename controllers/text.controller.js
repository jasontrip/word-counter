// const google = require('../external-apis/google-api')
const oxford = require('../external-apis/oxford-api')

const mockData = {
	lookupWord: {
		"enteredWord": "going",
		"lemma": "go",
		"definition": "proceeding somewhere"
	}
}

exports.lookupWord = (req, res) => {
	console.log(req.user)
	console.log(req.body)
	const {searchWord} = req.body
	mockData.lookupWord.enteredWord = searchWord
	
	oxford(searchWord)
		.then(results => res.json(results))
}