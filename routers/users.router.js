const router = require('express').Router()
const controller = require('../controllers/users.controller.js')
const passport = require('passport')

const jwtAuth = passport.authenticate('jwt', {session: false})

router.post('/', controller.addUser)
router.put('/word', jwtAuth, controller.updateUserWord)

module.exports = router