const validate = require('../utility/validate')
const User = require('../models/users.model')

exports.addUserWord = (req, res) => {



	res.send(req.body)

}

exports.addUser = (req, res) => {

	const validationRules = 
	{
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
	let {username, password, firstName='', lastName=''} = req.body
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
				lastName
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