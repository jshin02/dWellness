const config = require('../config.js')
const store = require('../store.js')

const signUp = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl+'/sign-up',
    data: formData
  })
}

const signIn = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl+'/sign-in',
    data: formData
  })
}

const changePw = formData => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl+'/change-password',
    headers:{
      Authorization: "Bearer "+store.user.token
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    method: "DELETE",
    url: config.apiUrl+'/sign-out',
    headers:{
      Authorization: "Bearer "+store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
