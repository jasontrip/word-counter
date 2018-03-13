const attachListeners = function() {
	$('main').on('click', '.js-lookup-word', handlers.lookupWordHandler)
	$('header').on('click', '.js-log-in', handlers.loginHandler)
	$('main').on('click', '.js-add-text', handlers.addTextHandler)
}