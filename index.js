

function handleSubmit() {
	$('.textToCount').on('submit', function(e) {
		e.preventDefault()
		console.log('hi')
	})
}

$(handleSubmit)