function attachListeners() {
	$('#app').on('submit', '.log-in-form', handlers.loginHandler)
	$('#app').on('submit', '.log-out-form', handlers.logoutHandler)
	$('#app').on('submit', '.create-account-form', handlers.createAccountHandler)
	$('#app').on('focus', '#newUsername, #newUserPassword', handlers.newUserFocusHandler)

	$('#app').on('click', '.js-lookup-word', handlers.lookupWordHandler)
	$('#app').on('click', '.create-account-link', handlers.createAccountLinkHandler)
	$('#app').on('click', '.js-add-text', handlers.addTextHandler)

	$('#app').on('click', '.hamburger-icon', handlers.toggleLeftNavHandler)
	$('#app').on('click', '.js-log-out', handlers.logoutHandler)
	$('#app').on('click', '.add-circle', handlers.showAddWordsDialogHandler)
	$('#app').on('click', '.dark-overlay', handlers.closeDialogHandler)
	$('#app').on('click', '.parse-text', handlers.parseTextHandler)
	$('#app').on('click', '.menu-level-2 li', handlers.leftNavHandler)

	$('#app').on('input change', '.assessment-slider', handlers.updateAssessmentValueHandler)
	$('#app').on('touchend mouseup', '.assessment-slider', handlers.updateAssessmentHandler)

}