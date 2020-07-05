const store = require('../store.js')
const showNotesTemplate = require('../templates/notes-listing.handlebars')
const notesEvents = require('../notes/events.js')

const addNoteHandlers = () => {
  $(()=>{
    //note CRUD
    $('#addnote-form').on('submit', notesEvents.onAddNote)
    // $('#updateNote-form').on('submit', notesEvents.onUpdateNote)
    $('.content').on('click','#deleteNoteButton', notesEvents.onDeleteNote)
  })
}

const showPlaceContent = showPlaceData => {
  const showNotesHtml = showNotesTemplate({notes: showPlaceData.place.notes})
  $('.content').append(showNotesHtml)
  $('.showPlace').empty().hide()
  //initiate event listener for note CRUD actions
  addNoteHandlers()
}

module.exports = {
  showPlaceContent
}
