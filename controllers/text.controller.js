const User = require('../models/users.model')
const google = require('../external-apis/google-api')
const oxford = require('../external-apis/oxford-api')

exports.lookupWord = (req, res) => {

	const {searchWord} = req.body

	let user, oxfordResults

	User.findOne({username: req.user.username})
		.then(_user => {
			return _user
		})
		.then(_user => {
			user = _user
			return oxford(searchWord)
		})
		.then(results => {
			if (!results) {
				return user
			}

			oxfordResults = results.results
			existingWord = user.wordList.find(w => w.word === searchWord)

			if (existingWord) {
				existingWord.count++
			} else {
				user.wordList.push({
					word: searchWord,
					count: 1
				})
			}
			
			return user.save()
		})
		.then(_user => {
			res.json({
				user,
				results: oxfordResults
			})
		})
}