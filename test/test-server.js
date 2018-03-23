'use strict'
const chai = require('chai')
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')

const expect = chai.expect

const User = require('../models/users.model')
const {app, runServer, closeServer} = require('../server')
const {TEST_DATABASE_URL} = require('../config')

mongoose.Promise = global.Promise

chai.use(chaiHttp)

function tearDownDb() {
	console.warn('Deleting database')
	return mongoose.connection.dropDatabase()
}

describe('/users endpoint', function() {
	
	describe('POST', function() {

		before(function() {
			return runServer(TEST_DATABASE_URL)
		})

		afterEach(function() {
			return tearDownDb()
		})

		after(function() {
			return closeServer()
		})

		it('should add a new user, and not a duplicate', function() {
			const testUser = {
				username: 'testUser',
				password: '12345678910',
				firstName: 'Test',
				lastName: 'McTest'
			}
			return chai.request(app)
				.post('/users')
				.send(testUser)
				.then(function(res) {
					expect(res).to.have.status(201)
					expect(res).to.be.json
					expect(res.body).to.include.keys(
						'username', 'firstName', 'lastName')
					return User.findOne({username: res.body.username})
				})
				.then(function(user) {
					expect(user.username).to.equal(testUser.username)
					expect(user.firstName).to.equal(testUser.firstName)
					expect(user.lastName).to.equal(testUser.lastName)
					return user.validatePassword(testUser.password)
				})
				.then(function(isValid) {
					expect(isValid).to.be.true
					return chai.request(app)
						.post('/users')
						.send(testUser)
				.then(function(res) {
					expect(true).to.be(false) // should not get a valid response
				})
				.catch(function(err) {
					expect(err).to.have.status(422)
				})
				})
		})

		it('should deny a request with a missing username', function() {
			const testUser = {
				password: '12345678910',
				firstName: 'Test',
				lastName: 'McTest'
			}

			return chai.request(app)
				.post('/users')
				.send(testUser)
				.then(function(res) {
					expect(true).to.be(false)
				})
				.catch(function(err) {
					expect(err).to.have.status(422)
				})
		})

		it('should deny a request with a missing password', function() {
			const testUser = {
				username: 'testUser',
				firstName: 'Test',
				lastName: 'McTest'
			}

			return chai.request(app)
				.post('/users')
				.send(testUser)
				.then(function(res) {
					expect(true).to.be(false)
				})
				.catch(function(err) {
					expect(err).to.have.status(422)
				})
		})

		it('should deny a request with a space in the username', function() {
			const testUser = {
				username: 'testUser ',
				password: '12345678910',
				firstName: 'Test',
				lastName: 'McTest'
			}

			return chai.request(app)
				.post('/users')
				.send(testUser)
				.then(function(res) {
					expect(true).to.be(false)
				})
				.catch(function(err) {
					expect(err).to.have.status(422)
					expect(err.response).to.be.json
					expect(err.response.body.message).to
						.equal('Cannot start or end with whitespace')
				})
		})

		it('should deny a request with a space in the password', function() {
			const testUser = {
				username: 'testUser',
				password: '12345678910 ',
				firstName: 'Test',
				lastName: 'McTest'
			}

			return chai.request(app)
				.post('/users')
				.send(testUser)
				.then(function(res) {
					expect(true).to.be(false)
				})
				.catch(function(err) {
					console.log(err)
					expect(err).to.have.status(422)
					expect(err.response).to.be.json
					expect(err.response.body.message).to
						.equal('Cannot start or end with whitespace')
				})
		})
	})
})


describe('GET /', function() {
	before(function() {
		return runServer(TEST_DATABASE_URL)
	})

	after(function() {
		return closeServer()
	})

	it('should return a page at /', function() {
		return chai.request(app)
			.get('/')
			.then(function(res) {
				expect(res).to.have.status(200)
			})
	})
})