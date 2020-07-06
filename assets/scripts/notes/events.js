'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api.js')
const placeApi = require('../place/api.js')
const ui = require('./ui.js')

const onAddNote = event => {
  event.preventDefault()
  let data = getFormFields(event.target)

  api.addNote(data)
    .then(ui.onAddNoteSuccess)
    .catch(ui.onAddNoteFailure)
}

const onUpdateNote = event => {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.updateNote(data)
    .then(ui.onUpdateNoteSuccess)
    .catch(ui.onUpdateNoteFailure)
}

const onDeleteNote = event => {
  event.preventDefault()
  store.note_id = event.target.dataset.id
  $('.content-notes').empty()

  api.deleteNote()
    .then(placeApi.showPlace)
    .then(ui.onDeleteNoteSuccess)
    .catch(ui.onDeleteNoteFailure)
}

module.exports = {
  onAddNote,
  onUpdateNote,
  onDeleteNote
}
