const router = require('express').Router()
const controller = require('../controllers/text.controller.js')
const passport = require('passport')

const jwtAuth = passport.authenticate('jwt', {session: false})

router.post('/lookup-word', controller.lookupWord)
router.post('/parse', jwtAuth, controller.parse)

module.exports = router