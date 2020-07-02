const config = require('../config.js')
const store = require('../store.js')

const getPlaces = () => {
  return $.ajax({
    url: config.apiUrl +'/places'
  })
}

const showPlace = () => {
  return $.ajax({
    url: config.apiUrl+'/places/'+store.place_id,
    headers: {
      Authorization: "Bearer "+store.user.token
    }
  })
}

const addPlace = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl+'/places',
    headers:{
      Authorization: "Bearer "+store.user.token
    },
    data:{
      place:{
        title: formData.place.title,
        address: formData.place.address,
        city: formData.place.city,
        country: formData.place.country,
        owner: store.user._id
      }}
  })
}

const updatePlace = formData => {
  console.log(formData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl+'/places/'+formData.place.place_id,
    headers:{
      Authorization: "Bearer "+store.user.token
    },
    data:{
      place:{
        title: formData.place.title,
        address: formData.place.address,
        city: formData.place.city,
        country: formData.place.country,
        owner: store.user._id
      }
    }
  })
}

const deletePlace = formData => {
  console.log(formData)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl+'/places/'+formData.place.id,
    headers:{
      Authorization: "Bearer "+store.user.token
    }
  })
}

module.exports = {
  getPlaces,
  showPlace,
  addPlace,
  updatePlace,
  deletePlace
}
