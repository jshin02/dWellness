'use strict'
const store = require('../store')
const ui = require('./ui.js')
const placeApi = require('../place/api.js')

const addHandlers = event => {
  $('.content').on('click', '#showPlaceButton', showPlace)
}

const showPlace = event => {
  //grab the element that user clicks on and add styling class
  $('.content').empty().fadeOut()
  event.preventDefault()
  $(event.target.firstElementChild).addClass('item')
  const place = event.currentTarget.firstElementChild
  $(place).addClass('item')
  //store id for notes CRUD actions
  store.place_id=place.dataset.id
  $('.showPlace').append($(place)).fadeIn()
  //Show notes in place
  placeApi.showPlace()
    .then(ui.showPlaceContent)
    .catch()
}

module.exports = {
  addHandlers
}
