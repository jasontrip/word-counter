const google = require('../external-apis/google-api')
const oxford = require('../external-apis/oxford-api')

const mockData = {
	lookupWord: {
		"enteredWord": "going",
		"lemma": "go",
		"definition": "proceeding somewhere"
	}
}

exports.lookupWord = (req, res) => {
	const {searchWord} = req.body
	mockData.lookupWord.enteredWord = searchWord
	
	oxford(searchWord)
		.then(results => res.json(results))


	// const err = "word not found"
	// if (err) {
	// 	return res.status(200).json({err})
	// }
}