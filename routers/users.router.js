const router = require('express').Router()
const controller = require('../controllers/users.controller.js')

router.post('/', controller.addUser)

module.exports = router