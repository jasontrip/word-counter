'use strict'
const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const {JWT_SECRET, JWT_EXPIRY} = require('../config')

const createAuthToken = function(user) {
  return jwt.sign({user}, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY,
    algorithm: 'HS256'
  })
}

const localAuth = passport.authenticate('local', {session: false})
// The user provides a username and password to login
router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user.serialize())
  res.json({
  	authToken: authToken,
  	user: req.user.serialize()
  })
})

const jwtAuth = passport.authenticate('jwt', {session: false})

// The user exchanges a valid JWT for a new one with a later expiration
router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user)
  res.json({authToken})
})

module.exports = router