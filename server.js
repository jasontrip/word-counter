const express = require('express')
const bodyParser = require('body-parser')
const natural = require('natural')
const {lemmatizer} = require('lemmatizer');

console.time("dictionary")
const dictionary = require('./websters.json')
console.timeEnd("dictionary")

console.time("word")
console.log(dictionary["OCEAN"])
console.timeEnd("word")

console.time("mountain")
console.log(dictionary["MOUNTAIN"])
console.timeEnd("mountain")

console.time("zebra")
console.log(dictionary["ZEBRA"])
console.timeEnd("zebra")

console.time("happy")
console.log(dictionary["HAPPY"])
console.timeEnd("happy")


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

app.get('/', (req, res) => {
	res.send('hello')
})

app.get('/brokenUpText', (req, res) => {
	res.send(req.body)
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


console.log("raw message: " + text)
console.log("all 3: " + allThree)

// app.listen(8080)


