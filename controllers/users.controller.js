const validate = require('../utility/validate')
const User = require('../models/users.model')

exports.addUser = (req, res) => {

	//validate input
	const requiredFields = ['username', 'password']
	const stringFields = ['username', 'password', 'firstName', 'lastName']
	const trimmedFields = ['username', 'password']
	const sizedFields = {
		username: {
			min: 1
		},
		password: {
			min: 10,
			max: 72 // 72 is max bcrypt length
		}
	}
	const invalid = validate(req.body, requiredFields,
									stringFields, trimmedFields, sizedFields)
	if (invalid) return res.status(422).json(invalid)

	// create user if username is unique
	let {username, password, firstName='', lastName='', addWords=[]} = req.body
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
				addWords
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