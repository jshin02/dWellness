//This page contains all of the callback functions for the event listeners in app.js
'use strict'
const getFormFields = require('../../../lib/get-form-fields')

const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  let userData = getFormFields(event.target)

  api.signUp(userData)
    .then(ui.signUpSuccess)
    //need to add failure context for web
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  let userData = getFormFields(event.target)

  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePw = event => {
  event.preventDefault()
  let userData = getFormFields(event.target)

  api.changePw(userData)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
