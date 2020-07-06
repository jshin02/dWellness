const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#signup-form').trigger('reset')
  $('#errMessage').html('Welcome to dWellness - sign in to proceed')
}

const signUpFailure = () => {
  $('#signup-form').trigger('reset')
  $('#errMessage').text('Please make sure your passwords match and try again')
}

const signInSuccess = data => {
  store.user = data.user
  $('#signin-form').trigger('reset')
  $('header').fadeOut()
  $('.form-row').toggleClass('form-complete')
  $('main').delay(350).fadeIn()
  $('#errMessage').empty()
}

const signInFailure = () => {
  $('#signin-form').trigger('reset')
  $('#errMessage').html('There was an error with your username or password - try again')
}

const changePwSuccess = data => {
  $('#pwChange-form').trigger('reset')
  $('#changePw-message').show().html('Successfully changed password').delay(2300).fadeOut()
}

const changePwFailure = () => {
  $('#pwChange-form').trigger('reset')
  $('#changePw-message').show().html('Something went wrong, please try again').delay(2300).fadeOut()
}

const signOutSuccess = data => {
  store.user = null
  $('main').fadeOut()
  $('header').delay(350).fadeIn()
  $('.form-row').delay(150).toggleClass('form-complete')
}

const signOutFailure = () => {
  $('#changePw-message').html('Internal Error, Refresh page and try again');
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
