module.exports = function(data, validateFields) {

	const {requiredFields,
				stringFields,
				trimmedFields,
				sizedFields} = validateFields

	const errorJson = (message, location) => {
		return {
			code: 422,
			reason: 'ValidationError',
			message: message,
			location: location
		}
	}

	if (requiredFields) {
		const missingField = requiredFields.find(field => !(field in data))
		if (missingField) {
			return errorJson('Missing field', missingField)
		}
	}
	if (stringFields) {
		const nonStringField = stringFields.find(
			field => field in data && typeof data[field] !== 'string'
		)
		if (nonStringField) {
			return errorJson('Incorrect field type: expected string', nonStringField)
		}
	}
	if (trimmedFields) {
		const nonTrimmedField = trimmedFields.find(
			field => data[field].trim() !== data[field]
		)
		if (nonTrimmedField) {
			return errorJson('Cannot start or end with whitespace', nonTrimmedField)
		}
	}
	if (sizedFields) {
		const tooSmallField = Object.keys(sizedFields).find(
			field =>
			'min' in sizedFields[field] &&
				data[field].trim().length < sizedFields[field].min
		)
		const tooLargeField = Object.keys(sizedFields).find(
			field =>
			'max' in sizedFields[field] &&
				data[field].trim().length > sizedFields[field].max
		)
		if (tooSmallField || tooLargeField) {
			const message = tooSmallField
				? `Must be at least ${sizedFields[tooSmallField]
					.min} characters long`
				: `Must be no more than ${sizedFields[tooLargeField]
					.max} characters long`
			return errorJson(message, tooSmallField || tooLargeField)
		}
	}
}