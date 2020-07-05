const store = require('../store.js')
const showPlacesTemplate = require('../templates/place-listing.handlebars')

const addPlaceSuccess = ajaxData => {
  console.log(ajaxData);
  console.log('addPlaceSuccess')
  $('#addPlace-form').trigger('reset')
}

const addPlaceFailure = () => {
  console.log('addPlaceFailure');
  $('#addPlace-form').trigger('reset')
}

const updatePlaceSuccess = ajaxData => {
  console.log(ajaxData)
  console.log('updatePlaceSuccess')
  $('#updatePlace-form').trigger('reset')
}

const updatePlaceFailure = () => {
  console.log('updatePlaceFailure')
  $('#updatePlace-form').trigger('reset')
}

const deletePlaceSuccess = () => {
  console.log('deletePlaceSuccess')
}

const deletePlaceFailure = () => {
  console.log('deletePlaceFailure')
}

const getPlacesSuccess = ajaxData => {
  console.log(ajaxData)
  const showPlacesHtml = showPlacesTemplate({ places: ajaxData.places})
  $('.content').empty().hide()
  $('.showPlace').append(showPlacesHtml).fadeIn()
  console.log('getPlacesSuccess');
}

const getPlacesFailure = () => {
  console.log('getPlacesFailure');
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
