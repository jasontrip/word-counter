// const language = require('@google-cloud/language')

// const client = new language.LanguageServiceClient()


// module.exports = text => {

// 	const document = {
// 	  content: text,
// 	  type: 'PLAIN_TEXT',
// 	};

// 	return client
// 	  .analyzeSyntax({document: document})
// 	  .then(results => {
// 	    const syntax = results[0]
// 	    return results[0]
// 	  })
// 	  .catch(err => {
// 	    console.error('ERROR:', err)
// 	  })
// }