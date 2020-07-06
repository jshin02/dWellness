const store = require('../store.js')
const placeEvents = require('./events2.js')
const showPlacesTemplate = require('../templates/place-listing.handlebars')


const updatePlaceSuccess = ajaxData => {
  $('#updatePlace-form').hide()
  $('#places-index-container').show()
}

const updatePlaceFailure = () => {
  console.log('updatePlaceFailure')
  $('#updatePlace-form').trigger('reset')
}

const deletePlaceSuccess = () => {
  console.log('test');
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
  console.log(ajaxData)
  const showPlacesHtml = showPlacesTemplate({ places: ajaxData.places})

  $('.content-notes').empty().hide()
  $('.showPlace').append(showPlacesHtml).fadeIn()
  $('#places-index-container').hide()
  //activate listeners on place Update and Delete
  placeUpdateDeleteHandlers()

}

const getPlacesFailure = () => {
  console.log('getPlacesFailure');
}

module.exports = {
  updatePlaceSuccess,
  updatePlaceFailure,
  deletePlaceSuccess,
  deletePlaceFailure
}
