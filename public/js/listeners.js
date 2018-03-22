function attachListeners() {
	$('#app').on('click', '.js-log-in', handlers.loginHandler)
	$('#app').on('click', '.js-log-out', handlers.logoutHandler)
	$('#app').on('click', '.js-create-account', handlers.createAccountHandler)

	$('#app').on('click', '.js-lookup-word', handlers.lookupWordHandler)
	$('#app').on('click', '.js-add-text', handlers.addTextHandler)
}