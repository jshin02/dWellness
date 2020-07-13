const store = require('../store.js')
const placeEvents = require('./events2.js')
const showPlacesTemplate = require('../templates/place-listing.handlebars')


const updatePlaceSuccess = ajaxData => {
  $('#updatePlace-form').hide()
  $('#places-index-container').show()
  $('#place-message').show().html(`Successfully updated - Select "See all Places" for update`).delay(2300).fadeOut()
}

const updatePlaceFailure = () => {
  $('#updatePlace-form').trigger('reset')
  $('#place-message').show().html(`Something went wrong - please try again`).delay(2300).fadeOut()
}

const deletePlaceSuccess = () => {
  $('#places-index-container').show()
  $('#place-message').show().html(`Successfully deleted - Select "See all Places" for update`).delay(2300).fadeOut()
}

const deletePlaceFailure = () => {
  $('#places-index-container').show()
  $('#place-message').show().html(`Something went wrong - please try again`).delay(2300).fadeOut()
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
}

module.exports = {
  updatePlaceSuccess,
  updatePlaceFailure,
  deletePlaceSuccess,
  deletePlaceFailure
}
