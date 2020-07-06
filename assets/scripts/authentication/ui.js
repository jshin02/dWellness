const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('Sign up Successful')
  $('#signup-form').trigger('reset')
  $('#errMessage').html('Welcome to dWellness - sign in to proceed')
}

const signUpFailure = () => {
  console.log('Sign Up Failed')
  $('#signup-form').trigger('reset')
  $('#errMessage').text('Please make sure your passwords match and try again')
}

const signInSuccess = data => {
  console.log(data)
  store.user = data.user
  console.log('Sign in Success')
  console.log(store)
  $('#signin-form').trigger('reset')
  $('header').fadeOut()
  $('.form-row').toggleClass('form-complete')
  $('main').delay(350).fadeIn()
  $('#errMessage').empty()
}

const signInFailure = () => {
  console.log('Sign in Failed')
  $('#signin-form').trigger('reset')
  $('#errMessage').html('There was an error with your username or password - try again')
}

const changePwSuccess = data => {
  console.log(data)
  console.log('Change pass successful')
  $('#pwChange-form').trigger('reset')
  $('#changePw-message').show().html('Successfully changed password').delay(2300).fadeOut()
}

const changePwFailure = () => {
  console.log('Change pass Failed');
  $('#pwChange-form').trigger('reset')
  $('#changePw-message').show().html('Something went wrong, please try again').delay(2300).fadeOut()
}

const signOutSuccess = data => {
  console.log(data);
  console.log('Signed Out')
  store.user = null
  console.log(store)
  $('main').fadeOut()
  $('header').delay(350).fadeIn()
  $('.form-row').delay(150).toggleClass('form-complete')
}

const signOutFailure = () => {
  console.log('Did not Sign Out');
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
