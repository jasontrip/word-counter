require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const {PORT, DATABASE_URL} = require('./config')

const textRouter = require('./routers/text.router')
const usersRouter = require('./routers/users.router')
const authRouter = require('./routers/auth.router')
const {localStrategy, jwtStrategy} = require('./strategies')

mongoose.Promise = global.Promise
const app = express()

passport.use(localStrategy)
passport.use(jwtStrategy)

app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/text', textRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

const jwtAuth = passport.authenticate('jwt', {session: false})

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

let server

function runServer(databaseUrl, port = PORT) {

	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, err => {
			if(err) {
				return reject(err)
			}
			server = app.listen(port, () => {
				console.log('app on port: ' + port)
				resolve(server)
			}).on('error', err => {
				mongoose.disconnect()
				reject(err)
			})
		})
	})
}

function closeServer() {
	return new Promise((resolve, reject) => {
		console.log('closing server')
		server.close(err => {
			if (err) {
				reject(err)
				return
			}
			resolve()
		})
	})
}

if (require.main === module) {
	runServer(DATABASE_URL).catch(err => console.error(err))
}

module.exports = {app, runServer, closeServer}























