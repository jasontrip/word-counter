const obj = {
	data: 'stuff',
	otherData: 'other stuff'
}

function handleSubmit() {
	$('.text-to-count').on('submit', function(event) {
		event.preventDefault()

		$.ajax('/broken-up-text', {
			method: 'POST',
			data: obj
		})
		.then(res => {
			console.log(res)
			$('.broken-up-text').html(res.hello)
		})
	})
}

$(handleSubmit)