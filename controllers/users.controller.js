const validate = require('../utility/validate')
const User = require('../models/users.model')

exports.addUserWords = (req, res) => {
	// jwt protected endpoint, so must have user
	const {username} = req.user

	const validationRules = {
		requiredFields: ['words']
	}
	const invalid = validate(req.body, validationRules)
	if (invalid) return res.status(422).json(invalid)

	const {words} = req.body

	return User.findOne(
			{username: username},
			{wordList: 1}
		).then(_user => {
			words.forEach(newWord => {
				const existingWord = _user.wordList.find(w => w.word === newWord.word)
				if (existingWord) {
					if (newWord.assessment) {
						(existingWord.assessment)
							? existingWord.assessment = existingWord.assessment + newWord.assessment
							: existingWord.assessment = newWord.assessment
					}
					if (newWord.count) {
						existingWord.count = existingWord.count + newWord.count
					}
				} else {
					_user.wordList.push(newWord)
				}
			})
			return _user.save()
		}).then( () => {
			res.status(200).send()
		}).catch( err => {
			res.status(400).send(err)
		})

}

exports.updateWord = (req, res) => {
	// jwt protected endpoint, so must have user
	const {username} = req.user

	const validationRules = {
		requiredFields: ['word', 'assessment'],
		stringFields: ['word', 'assessment']
	}
	const invalid = validate(req.body, validationRules)
	if (invalid) return res.status(422).json(invalid)

	const {word, assessment} = req.body

	return User.findOne(
			{username: username},
			{wordList: 1}
		)
		.then(_user => {
			const _word = _user.wordList.find(w => w.word === word)
			_word.assessment = assessment
			_user.save()
		})
		.then( () => {
			res.status(200).send()
		})
}

exports.deleteWord = (req, res) => {
	// jwt protected endpoint, so must have user
	const {username} = req.user

	const validationRules = {
		requiredFields: ['word'],
	}
	const invalid = validate(req.params, validationRules)
	if (invalid) return res.status(422).json(invalid)

	const {word} = req.params

	return User.findOne(
			{username: username},
			{wordList: 1}
		)
		.then(_user => {
			_user.wordList.splice(_user.wordList.indexOf(
				_user.wordList.find(w => w.word === word)
			), 1)
			_user.save()
		})
		.then( () => {
			res.status(200).send()
		})
}

exports.addUser = (req, res) => {

	const validationRules = {
		requiredFields: ['username', 'password'],
		stringFields: ['username', 'password', 'firstName', 'lastName'],
		trimmedFields: ['username', 'password'],
		sizedFields: {
			username: {
				min: 1
			},
			password: {
				min: 10,
				max: 72 // 72 is max bcrypt length
			}
		}
	}

	const invalid = validate(req.body, validationRules)
	if (invalid) return res.status(422).json(invalid)

	// create user if username is unique
	let {username, password, firstName='', lastName='', wordList} = req.body
	firstName = firstName.trim()
	lastName = lastName.trim()

	return User.find({username})
		.count()
		.then(count => {
			if (count > 0) {
				return Promise.reject({
					code: 422,
					reason: 'ValidationError',
					message: 'Username already taken',
					location: 'username'
				})
			}
			return User.hashPassword(password)
		})
		.then(hash => {
			return User.create({
				username,
				password: hash,
				firstName,
				lastName,
				wordList
			})
		})
		.then(user => {
			return res.status(201).json(user.serialize())
		})
		.catch(err => {
			if (err.reason === 'ValidationError') {
				return res.status(err.code).json(err)
			}
			res.status(500).json({code: 500, message: 'Internal server error'})
		})
}