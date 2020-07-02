const store = require('../store.js')
const showNotesTemplate = require('../templates/notes-listing.handlebars')


const showPlaceContent = showPlaceData => {
  const showNotesHtml = showNotesTemplate({notes: showPlaceData.place.notes})
  $('.showPlace').append(showNotesHtml)
}

module.exports = {
  showPlaceContent
}
