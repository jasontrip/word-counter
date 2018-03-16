const router = require('express').Router()
const controller = require('../controllers/text.controller.js')

router.post('/lookup-word', controller.lookupWord)

module.exports = router