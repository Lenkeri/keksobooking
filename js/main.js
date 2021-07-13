import {showPopupElem,  getPinsForMap, arrPinsMap} from './blocks.js'
import {getDisableForm, getUndisableForm} from './form.js'

export const map = document.querySelector('.map')

export const mapPins = map.querySelector('.map__pins')
export const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
export const templatePopup = document.getElementById('card').content.querySelector('.popup');
// mapPins.addEventListener('click', function(evt) {
//   console.log(evt.target.closest('.map__pin').dataset.index)
// })

export const activate = function () {
  if(isActive()){
    map.classList.remove('map--faded')
    getPinsForMap(arrPinsMap)
    getUndisableForm()
  }
}

const isActive = function () {

  if (map.classList.contains('map--faded')){
    return true
  }
return false
}


getDisableForm()


