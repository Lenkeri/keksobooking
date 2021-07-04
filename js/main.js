import {showPopupElem,  getPinsForMap, arrPinsMap} from './blocks.js'
import {getDisableForm, getUndisableForm} from './form.js'

export const map = document.querySelector('.map')

export const mapPins = map.querySelector('.map__pins')
export const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
export const templatePopup = document.getElementById('card').content.querySelector('.popup');
const  mapPinMain = document.querySelector('.map__pin--main')
getDisableForm()

const activate = function () {
  map.classList.remove('map--faded')
  getPinsForMap(arrPinsMap)
  showPopupElem()
  getUndisableForm()
}

mapPinMain.addEventListener('mousedown', function (evt) {
  activate()

})

mapPinMain.addEventListener('keydown', function(evt) {
  if (evt.code === "Enter" /*&& !setupUserName.activeElement*/) {
   activate()

  }
});

// let ARR = [1,0, 0, 0, 0, 0]

// function get(){
// for(let i = 0;i <= 5 ;i++){
//   if(i == 1) {
//     ARR[i] = ARR[i - 1] + 1;
//   } else{
//     ARR[i] = ARR[i - 1] + ARR[i - 2];

//   }

// }
// return ARR
// }
// console.log(get());


