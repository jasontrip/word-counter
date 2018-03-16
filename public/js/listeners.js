function attachListeners() {
	$('header').on('click', '.js-log-in', handlers.loginHandler)
	$('header').on('click', '.js-log-out', handlers.logoutHandler)

	$('main').on('click', '.js-lookup-word', handlers.lookupWordHandler)
	$('main').on('click', '.js-add-text', handlers.addTextHandler)
}