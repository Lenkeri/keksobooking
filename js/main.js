import {showPopupElem,  getPinsForMap, arrPinsMap} from './blocks.js'
import {blockForm, getUndisableForm} from './form.js'
import {getData} from './server.js'
import {showError_getData} from './messages.js'

export const map = document.querySelector('.map')
export const mapPins = map.querySelector('.map__pins')
export const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
export const templatePopup = document.getElementById('card').content.querySelector('.popup');

// mapPins.addEventListener('click', function(evt) {
//   console.log(evt.target.closest('.map__pin').dataset.index)
// })

export const activate = function () {
  if (isActive()) {
    map.classList.remove('map--faded')
    // getData(onSuccess, onError)
    getUndisableForm()
  }
}

const isActive = function () {
  return map.classList.contains('map--faded');
}

blockForm()


const onSuccess = function(data) {
  console.log('onSuccess', data);
  getPinsForMap(data)
}

const onError = function(error) {
  showError_getData(error)
}
