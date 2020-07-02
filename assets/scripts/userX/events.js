'use strict'
const store = require('../store')
const ui = require('./ui.js')
const notesEvents = require('../notes/events.js')
const placeApi = require('../place/api.js')

const addHandlers = event => {
  $('.content').on('click', '#showPlaceButton', showPlace)
}

const addNoteHandlers = () => {
  $(()=>{
    //note CRUD
    $('#addnote-form').on('submit', notesEvents.onAddNote)
    // $('#updateNote-form').on('submit', notesEvents.onUpdateNote)
    // $('#deleteNote-form').on('submit', notesEvents.onDeleteNote)
  })
}

const showPlace = event => {
  //grab the element that user clicks on and add styling class
  $('.content').empty().fadeOut()
  event.preventDefault()
  $(event.target.firstElementChild).addClass('item')
  const place = event.currentTarget.firstElementChild
  $(place).addClass('item')
  //store id for note CRUD actions
  store.place_id=place.dataset.id
  $('.showPlace').append($(place)).fadeIn()
  //Show notes in place
  placeApi.showPlace(store.place_id)
    .then(ui.showPlaceContent)
  //initiate event listener on new form
  addNoteHandlers()
}

module.exports = {
  addHandlers
}
