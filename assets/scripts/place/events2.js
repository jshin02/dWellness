'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const ui2 = require('./ui2.js')

const onUpdatePlace = event => {
  event.preventDefault()
  let userData = getFormFields(event.currentTarget)
  store.place_id = event.currentTarget.dataset.id
  $('.showPlace').empty()

  api.updatePlace(userData)
    .then(ui2.updatePlaceSuccess)
    .catch(ui2.updatePlaceFailure)
}

const onDeletePlace = event => {
  event.preventDefault()
  let id = event.currentTarget.dataset.id
  $('.showPlace').empty()

  api.deletePlace(id)
    .then(ui2.deletePlaceSuccess)
    .catch(ui2.deletePlaceFailure)
}

module.exports = {
  onUpdatePlace,
  onDeletePlace,
}
