import {showPopupElem,  getPinsForMap, arrPinsMap} from './blocks.js'
import {getDisableForm, getUndisableForm} from './form.js'
import {getData} from './server.js'

export const map = document.querySelector('.map')
export const mapPins = map.querySelector('.map__pins')
export const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
export const templatePopup = document.getElementById('card').content.querySelector('.popup');
const errorList = map.querySelector('.error-list')
const errorText = errorList.querySelector('.content-err');
// mapPins.addEventListener('click', function(evt) {
//   console.log(evt.target.closest('.map__pin').dataset.index)
// })

export const activate = function () {
  if(isActive()){
    map.classList.remove('map--faded')
    getData(onSuccess, onError)
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


const onSuccess = function(data) {
  console.log('onSuccess', data);
  getPinsForMap(data)
}

const onError = function(error) {
  errorList.classList.remove('visually-hidden')
  errorText.textContent = ` Ошибка ${error}`;
}
