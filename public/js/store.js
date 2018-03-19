const store = (() => {

	return {
		loggedIn: false,
		username: 'email@gmail.com',
		lookupWord: {
			"error": "",
			"enteredWord": "",
			"lemma": "",
			"definition": ""
		},
		wordList: [
			{
				"lemma": "abate",
				"definition": "(of something perceived as hostile, threatening, or negative) become less intense or widespread.",
				"exposures": 12
			},
			{
				"lemma": "variegate",
				"definition": "to diversify in external appearance especially with different colors",
				"exposures": 5
			},
			{
				"lemma": "another",
				"definition": "used to refer to an additional person or thing of the same type as one already mentioned or known about; one more; a further.",
				"exposures": 38
			}
		]
	}
})()