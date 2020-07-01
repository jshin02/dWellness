'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./authentication/events.js')
const placeEvents = require('./place/events.js')
const notesEvents = require('./notes/events.js')
$(() => {
  //authentication events
  $('#signup-form').on('submit', authEvents.onSignUp)
  $('#signin-form').on('submit', authEvents.onSignIn)
  $('#pwChange-form').on('submit', authEvents.onChangePw)
  $('#signout-button').on('click', authEvents.onSignOut)

  //place CRUD
  $('#addPlace-form').on('submit', placeEvents.onAddPlace)
  $('#updatePlace-form').on('submit', placeEvents.onUpdatePlace)
  $('#deletePlace-form').on('submit', placeEvents.onDeletePlace)
  $('#places-index').on('click', placeEvents.onGetPlaces)

  //note CRUD
  $('#addnote-form').on('submit', notesEvents.onAddNote)
  $('#updateNote-form').on('submit', notesEvents.onUpdateNote)
  $('#deleteNote-form').on('submit', notesEvents.onDeleteNote)
})
