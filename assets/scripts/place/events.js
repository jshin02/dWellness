'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddPlace = event => {
  event.preventDefault()
  let userData = getFormFields(event.target)

  api.addPlace(userData)
    .then(ui.addPlaceSuccess)
    .catch(ui.addPlaceFailure)
}

const onUpdatePlace = event => {
  event.preventDefault()
  let userData = getFormFields(event.target)

  api.updatePlace(userData)
    .then(ui.updatePlaceSuccess)
    .catch(ui.updatePlaceFailure)
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

  api.getPlaces()
    .then(ui.getPlacesSuccess)
    .catch(ui.getPlacesFailure)
}

module.exports = {
  onAddPlace,
  onUpdatePlace,
  onDeletePlace,
  onGetPlaces
}
