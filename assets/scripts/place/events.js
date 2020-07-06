'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddPlace = event => {
  event.preventDefault()
  let userData = getFormFields(event.target)
  $('.showPlace').empty()

  api.addPlace(userData)
    .then(ui.addPlaceSuccess)
    .catch(ui.addPlaceFailure)
}

const onDeletePlace = event => {
  event.preventDefault()
  let data = getFormFields(event.target)

  api.deletePlace(data)
    .then(ui.deletePlaceSuccess)
    .catch(ui.deletePlaceFailure)
}

const onGetPlaces = event => {
  console.log(event)
  event.preventDefault()
  $('#addNote').hide()
  $('#addPlace').show()
  $('.singlePlace').empty().hide()
  api.getPlaces()
    .then(ui.getPlacesSuccess)
    .catch(ui.getPlacesFailure)
}

module.exports = {
  onAddPlace,
  onDeletePlace,
  onGetPlaces
}
