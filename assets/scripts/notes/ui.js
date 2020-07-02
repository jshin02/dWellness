const store = require('../store.js')
const addNoteTemplate = require('../templates/new-note.handlebars')
const showNotesTemplate = require('../templates/notes-listing.handlebars')

const onAddNoteSuccess = data => {
  store.note_id=data.notes[data.notes.length-1]._id
  const newNote = data.notes[data.notes.length-1]
  console.log(newNote)
  const addNewNote = addNoteTemplate(newNote)
  console.log(addNewNote)
  $('.showPlace').append(addNewNote)
  console.log('Added note successfully')
  $('#addnote-form').trigger('reset')
}

const onAddNoteFailure = () => {
  console.log('Add note Failed miserably')
}

const onUpdateNoteSuccess = data => {
  console.log('Edited note success')
  $('#updateNote-form').trigger('reset')
}

const onUpdateNoteFailure = () => {
  console.log('Failed to edit note');
  $('#updateNote-form').trigger('reset')
}

const onDeleteNoteSuccess = deleteNoteData => {
  console.log(deleteNoteData)
  const showNotesHtml = showNotesTemplate({notes: deleteNoteData.place.notes})

  $('.showPlace').append(showNotesHtml)
  console.log('Deleted note success')
}

const onDeleteNoteFailure = () => {
  console.log('Failed to delete note')
}

module.exports = {
  onAddNoteSuccess,
  onAddNoteFailure,
  onUpdateNoteSuccess,
  onUpdateNoteFailure,
  onDeleteNoteSuccess,
  onDeleteNoteFailure
}
