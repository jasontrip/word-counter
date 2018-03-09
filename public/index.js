
const MOCK_WORD_DATA = {
	"word": "abate",
	"definition": "(of something perceived as hostile, threatening, or negative) become less intense or widespread."
}

const MOCK_USER_DATA = {
	"username": "email@email.com",
	"password": "password",
	"words": [
		{
			"lemma": "abate",
			"definition": "(of something perceived as hostile, threatening, or negative) become less intense or widespread.",
			"exposures": 12
		},
		{
			"lemma": "variegate",
			"definition": "to diversify in external appearance especially with different colors",
			"exposures": 5
		}
	]
}

function handleSubmit() {
	$('.words-and-text').on('submit', function(event) {
		event.preventDefault()

		$.ajax('/broken-up-text', {
			method: 'POST',
			data: MOCK_WORD_DATA
		})
		.then(res => {
			console.log(res)
			$('.word-lists').html(res.hello)
		})
	})
}

$(handleSubmit)