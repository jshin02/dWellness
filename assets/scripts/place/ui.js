const store = require('../store.js')
const placeEvents = require('./events2.js')
const showPlacesTemplate = require('../templates/place-listing.handlebars')

const addPlaceSuccess = ajaxData => {
  $('#addPlace-form').trigger('reset')
  $('#places-index-container').show()
}

const addPlaceFailure = () => {
  $('#addPlace-form').trigger('reset')
}

const updatePlaceSuccess = ajaxData => {
  $('#updatePlace-form').hide()
  $('#places-index-container').show()
}

const updatePlaceFailure = () => {
  $('#updatePlace-form').trigger('reset')
}

const deletePlaceSuccess = () => {
  $('#places-index-container').show()
}

const deletePlaceFailure = () => {
  $('#places-index-container').show()
}

const placeUpdateDeleteHandlers = () => {
  $(()=>{
    $('.updatePlaceBtn').on('click', () => $('.updatePlace-form').show())
    $('.updatePlace-form').on('submit', placeEvents.onUpdatePlace)
    $('.showPlace').on('click','#deletePlaceBtn', placeEvents.onDeletePlace)
  })
}

const getPlacesSuccess = ajaxData => {
  const showPlacesHtml = showPlacesTemplate({ places: ajaxData.places})

  $('.content-notes').empty().hide()
  $('.showPlace').append(showPlacesHtml).fadeIn()
  $('#places-index-container').hide()
  //activate listeners on place Update and Delete
  placeUpdateDeleteHandlers()

}

const getPlacesFailure = () => {
  $('#changePw-message').html('Error getting places, please refresh page and try again.')
}

module.exports = {
  addPlaceSuccess,
  addPlaceFailure,
  updatePlaceSuccess,
  updatePlaceFailure,
  deletePlaceSuccess,
  deletePlaceFailure,
  getPlacesSuccess,
  getPlacesFailure
}
