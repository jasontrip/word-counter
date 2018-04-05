const Dictionary = require("oxford-dictionary")

const config = {
	app_id: process.env.OXFORD_APPLICATION_ID,
	app_key: process.env.OXFORD_APPLICATION_CREDENTIALS,
	source_lang: "en"
}

const oxford = new Dictionary(config)

module.exports = word => {
	return oxford.find(word)
		.then(result => result)
}