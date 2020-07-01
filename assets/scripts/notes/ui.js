const store = require('../store.js')
const showPlacesTemplate = require('../templates/place-listing.handlebars')

const onAddNoteSuccess = data => {
  console.log(data)
  console.log('Added note successfully')
  $('#addnote-form').trigger('reset')
}

const onAddNoteFailure = () => {
  console.log('Add note Failed miserably')
  $('#addnote-form').trigger('reset')
}

const onUpdateNoteSuccess = data => {
  console.log('Edited note success')
  $('#updateNote-form').trigger('reset')
}

const onUpdateNoteFailure = () => {
  console.log('Failed to edit note');
  $('#updateNote-form').trigger('reset')
}

const onDeleteNoteSuccess = data => {
  console.log('Deleted note success')
  $('#deleteNote-form').trigger('reset')
}

const onDeleteNoteFailure = () => {
  console.log('Failed to delete note')
  $('#deteNote-form').trigger('reset')
}

module.exports = {
  onAddNoteSuccess,
  onAddNoteFailure,
  onUpdateNoteSuccess,
  onUpdateNoteFailure,
  onDeleteNoteSuccess,
  onDeleteNoteFailure
}
