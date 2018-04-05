'use strict'
const mongoose = require('mongoose')

const WordSchema = mongoose.Schema({
	word: {type: String},
	count: {type: Number},
	assessment: {type: Number}
})

const Word = mongoose.model('Word', WordSchema)
module.exports = Word