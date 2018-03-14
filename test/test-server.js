
const chai = require('chai')
const chaiHttp = require('chai-http')

const {app, runServer, closeServer} = require('../server')

const expect = chai.expect

chai.use(chaiHttp)


describe('GET /', function() {
	before(function() {
		return runServer()
	})

	after(function() {
		return closeServer()
	})

	it('should return a page at /', function() {
		return chai.request(app)
			.get('/')
			.then(function(res) {
				console.log('something')
				expect(res).to.have.status(200)
			})
	})
})