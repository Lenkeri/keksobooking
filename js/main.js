import {showPopupElem,  getPinsForMap, arrPinsMap} from './blocks.js'
import {} from './form.js'

export const map = document.querySelector('.map')

export const mapPins = map.querySelector('.map__pins')
export const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
export const templatePopup = document.getElementById('card').content.querySelector('.popup');
const  mapPinMain = document.querySelector('.map__pin--main')

const formDisabled = function () {

}



mapPinMain.addEventListener('mousedown', function (evt) {

  map.classList.remove('map--faded')
  getPinsForMap(arrPinsMap)
  showPopupElem()

})

mapPinMain.addEventListener('keydown', function(evt) {
  if (evt.code === "Enter" /*&& !setupUserName.activeElement*/) {
    map.classList.remove('map--faded')
  getPinsForMap(arrPinsMap)
  showPopupElem()

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


