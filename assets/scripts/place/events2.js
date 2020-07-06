'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
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
  let userData = getFormFields(event.currentTarget)
  store.place_id = event.currentTarget.dataset.id
  $('.showPlace').empty()

  api.updatePlace(userData)
    .then(ui.updatePlaceSuccess)
    .catch(ui.updatePlaceFailure)
}

const onDeletePlace = event => {
  event.preventDefault()
  let id = event.currentTarget.dataset.id
  $('.showPlace').empty()

  api.deletePlace(id)
    .then(ui.deletePlaceSuccess)
    .catch(ui.deletePlaceFailure)
}

module.exports = {
  onUpdatePlace,
  onDeletePlace,
}
