require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const natural = require('natural')
const {lemmatizer} = require('lemmatizer');
const textRouter = require('./routers/text.router')


const tokenizer = new natural.WordTokenizer()
const app = express()

app.use(bodyParser.json())


// Example data structures
// const myList = ['ephemeral', 'variagate', 'castigate']

// const myUser = {
// 	exposures: {
// 		hello: {
// 		rating: 10,
// 		count: 100,
// 		},
// 		bad: {
// 			rating: 1,
// 			Count: 12
// 		}
// 		ephemeral: {
// 			Rating: 3,
// 			Count: 10,
// 		}
// 	},
// 	focusList: ['ephemeral', 'variagate', 'castigate']
// }
app.use(express.static('public'))

app.use('/text', textRouter)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

app.post('/broken-up-text', (req, res) => {
	console.log('broken-up-text was called')
	res.json({hello: "hello"})
})

const text = "asdf asdf hello Jason tires variagated stuff ./a/" +
						" friendship fellows automatically respiration mechanical" +
						" can't won't O'Neil hi-lite"

const tokens = tokenizer.tokenize(text)
const allThree = tokens.map(token => {
	return `${token}, ${natural.PorterStemmer.stem(token)}, ${lemmatizer(token)}
				 `
})
// const lemmas = tokens.map(token => {
// 	return lemmatizer(token)
// })


// console.log("raw message: " + text)
// console.log("all 3: " + allThree)

let server

function runServer() {
	const port = process.env.PORT || 8080
	return new Promise((resolve, reject) => {
		server = app.listen(port, () => {
			console.log('app on port: ' + port)
			resolve(server)
		}).on('error', err => reject(err))
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
	runServer().catch(err => console.error(err))
}

module.exports = {app, runServer, closeServer}























