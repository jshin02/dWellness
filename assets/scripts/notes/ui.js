const store = require('../store.js')
const addNoteTemplate = require('../templates/new-note.handlebars')
const showNotesTemplate = require('../templates/notes-listing.handlebars')

const onAddNoteSuccess = data => {
  store.note_id=data.notes[data.notes.length-1]._id
  const newNote = data.notes[data.notes.length-1]
  // console.log(newNote)
  const addNewNote = addNoteTemplate(newNote)
  $('.content-notes').append(addNewNote)
  $('#addnote-form').trigger('reset')
}

const onAddNoteFailure = () => {
  // console.log('Add note Failed miserably')
}

const onUpdateNoteSuccess = data => {
  $('#updateNote-form').trigger('reset')
}

const onUpdateNoteFailure = () => {
  $('#updateNote-form').trigger('reset')
}

const onDeleteNoteSuccess = deleteNoteData => {
  const showNotesHtml = showNotesTemplate({notes: deleteNoteData.place.notes})

  $('.content-notes').append(showNotesHtml)
}

const onDeleteNoteFailure = () => {
}

module.exports = {
  onAddNoteSuccess,
  onAddNoteFailure,
  onUpdateNoteSuccess,
  onUpdateNoteFailure,
  onDeleteNoteSuccess,
  onDeleteNoteFailure
}
