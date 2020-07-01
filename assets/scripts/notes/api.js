const config = require('../config.js')
const store = require('../store.js')

const addNote = data => {
  return $.ajax({
    url: config.apiUrl+'/notes',
    method: 'POST',
    data:{
      note:{
        title: data.note.title,
        body: data.note.body,
        health: data.note.health,
        work: data.note.work,
        play: data.note.play,
        love: data.note.love,
        place_id: data.note.place_id
      }
    }
  })
}

const updateNote = data => {
  return $.ajax({
    url: config.apiUrl+'/places/'+data.note.place_id+'/notes/'+data.note.note_id,
    method: 'PATCH',
    data:{
      note:{
        title: data.note.title,
        body: data.note.body,
        health: data.note.health,
        work: data.note.work,
        play: data.note.play,
        love: data.note.love
      }
    }
  })
}

const deleteNote = data => {
  return $.ajax({
    url: config.apiUrl+'/places/'+data.note.place_id+'/notes/'+data.note.note_id,
    method: 'DELETE'
  })
}

module.exports = {
  addNote,
  updateNote,
  deleteNote
}
