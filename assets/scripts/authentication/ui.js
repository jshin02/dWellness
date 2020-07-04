const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('Sign up Successful')
  $('#signup-form').trigger('reset')
}

const signUpFailure = () => {
  console.log('Sign Up Failed')
  $('#signup-form').trigger('reset')
}

const signInSuccess = data => {
  console.log(data)
  store.user = data.user
  console.log('Sign in Success')
  console.log(store)
  $('#signin-form').trigger('reset')
  $('header').hide().fadeOut()
  $('main').show().fadeIn()
}

const signInFailure = () => {
  console.log('Sign in Failed')
  $('#signin-form').trigger('reset')
}

const changePwSuccess = data => {
  console.log(data)
  console.log('Change pass successful')
  $('#pwChange-form').trigger('reset')
}

const changePwFailure = () => {
  console.log('Change pass Failed');
  $('#pwChange-form').trigger('reset')
}

const signOutSuccess = data => {
  console.log(data);
  console.log('Signed Out')
  store.user = null
  console.log(store)
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
