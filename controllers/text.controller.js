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