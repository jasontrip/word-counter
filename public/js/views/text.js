const text = ( () => {

	function render() {
		const html = `
			<form class="adding-text">
				<label for="text-to-add">text to add</label><br>
				<input type="text-area" name="text-to-add" class="text-to-add" />
				<button class="js-add-text">add words</button>
			</form>
		`

		$('.text-and-added').html(html)
	}

	return {
		render
	}

}) ()