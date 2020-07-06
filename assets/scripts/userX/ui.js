const store = require('../store.js')
const showNotesTemplate = require('../templates/notes-listing.handlebars')
const notesEvents = require('../notes/events.js')

const addNoteHandlers = () => {
  $(()=>{
    //note CRUD
    $('#addnote-form').on('submit', notesEvents.onAddNote)
    // $('.showPlace').on('click','#updatePlaceBtn', () => console.log('hello') /*notesEvents.onUpdateNote*/)
    $('.content-notes').on('click','#deleteNoteButton', notesEvents.onDeleteNote)
  })
}

const showPlaceContent = showPlaceData => {
  const showNotesHtml = showNotesTemplate({notes: showPlaceData.place.notes})
  $('.showPlace').empty().hide()
  $('.content-notes').append(showNotesHtml).fadeIn()
  $('#places-index-container').show()
  //initiate event listener for note CRUD actions
  addNoteHandlers()
}

module.exports = {
  showPlaceContent
}
