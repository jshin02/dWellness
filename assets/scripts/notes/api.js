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
        place_id: store.place_id
      }
    }
  })
}

const updateNote = data => {
  return $.ajax({
    url: config.apiUrl+'/places/'+store.place_id+'/notes/'+store.note_id,
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

const deleteNote = () => {
  return $.ajax({
    url: config.apiUrl+'/places/'+store.place_id+'/notes/'+store.note_id,
    method: 'DELETE'
  })
}

module.exports = {
  addNote,
  updateNote,
  deleteNote
}
