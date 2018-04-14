'use strict'
const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/users.model')

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

  User.findOne({username:req.user.username})
    .then( user => {
      const {searchWordList} = req.body

      if (searchWordList) {
        searchWordList.forEach(searchWord => {
          let index
          const word = user.wordList.find( (w, i) => {
            index = i
            return w.word === searchWord.word
          })

          if (word) {
            word.count += searchWord.count
            // need to update array with new value
            user.wordList[index] = word
          } else {
            user.wordList.push(searchWord)
          }

        })
      }
      return user.save()
      console.log(user, req.body)
    })
    .then(_user => {
      const authToken = createAuthToken(_user.serialize())
      res.json({
        authToken: authToken,
        user: _user.serialize()
      })
    })

})

const jwtAuth = passport.authenticate('jwt', {session: false})

// The user exchanges a valid JWT for a new one with a later expiration
router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user)
  res.json({authToken})
})

module.exports = router