const User = require('../models/users.model')
const google = require('../external-apis/google-api')
const oxford = require('../external-apis/oxford-api')

exports.lookupWord = (req, res) => {

	const {searchWord} = req.body

	let user, oxfordResults

	oxford(searchWord)
		.then(results => {
			res.status(200).json(results)
		})
		.catch(err => {
			res.status(204).send()
		})
}

exports.parse = (req, res) => {

	const {text} = req.body
	const canAdd = []
	const cannotAdd = []
	const containsNumber = /\d/

	google(text)
		.then(results => {
			results[0].tokens.map(token => {
				token.partOfSpeech.tag == 'X' ||
					token.partOfSpeech.tag == 'PUNCT' ||
					containsNumber.test(token.lemma)
				?cannotAdd.push(token.lemma)
				:canAdd.push(token.lemma)
			})

			res.status(200).json({canAdd, cannotAdd})
		})
	
}