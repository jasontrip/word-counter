const mockData = {
	lookupWord: {
		"enteredWord": "going",
		"lemma": "go",
		"definition": "proceeding somewhere"
	}
}

exports.lookupWord = (req, res) => {
	mockData.lookupWord.enteredWord = req.body.searchWord

	res.json(mockData)
}