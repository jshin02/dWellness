'use strict'

const store = require('../store')
// const ui = require('./ui.js')

const addHandlers = event => {
  $('.content').on('click', '#showPlaceButton', showPlace)
}

const showPlace = event => {
  // $('.content').fadeOut()
  $('.content').empty().fadeOut()
  event.preventDefault()
  $(event.target.firstElementChild).addClass('item')
  const place = event.currentTarget.firstElementChild
  $(place).addClass('item')
  console.log(place)
  $('.showPlace').append($(place)).fadeIn()
}

module.exports = {
  addHandlers
}
