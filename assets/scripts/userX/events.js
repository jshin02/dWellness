'use strict'
const store = require('../store')
const ui = require('./ui.js')
const placeApi = require('../place/api.js')

const addHandlers = event => {
  $('.showPlace').on('click', '#showPlaceButton', showPlace)
  $('#signup-trigger').on('click', registrationNeeded)
  $('#signin-trigger').on('click', registrationCompleted)
}

const showPlace = event => {
  //grab the element that user clicks on and add styling class
  event.preventDefault()
  $('.showPlace').empty().fadeOut()
  $('.content').show()
  $('#addPlace').hide()
  // console.log(event.currentTarget)
  const place = event.currentTarget.firstElementChild
  $(place).addClass('item')
  //store id for notes CRUD actions
  store.place_id=place.dataset.id
  $('#addNote').show()
  $('.singlePlace').append($(place)).fadeIn()
  //Show notes in place
  placeApi.showPlace()
    .then(ui.showPlaceContent)
    .catch()
}

const registrationNeeded = event => {
  $('.authMessages').toggleClass('triggerMessage')
  $('.registration').toggleClass('triggerLogin')
  $('#signup-message').fadeOut()
  $('#signin-message').delay(500).fadeIn()
  $('#signin-form').fadeOut()
  $('#signup-form').delay(500).fadeIn()
}

const registrationCompleted = event => {
  $('.authMessages').toggleClass('triggerMessage')
  $('.registration').toggleClass('triggerLogin')
  $('#signin-message').fadeOut()
  $('#signup-message').delay(500).fadeIn()
  $('#signup-form').fadeOut()
  $('#signin-form').delay(500).fadeIn()
}

module.exports = {
  addHandlers
}
