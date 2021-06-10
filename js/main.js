import {generateAds,  FEATURES} from './data.js'

const map = document.querySelector('.map')
map.classList.remove('map--faded')

const mapPins = map.querySelector('.map__pins')
const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
const templatePopup = document.getElementById('card').content.querySelector('.popup');
console.log(templatePopup);

const createPinElement = function(obj){
  const pin = templatePin.cloneNode(true);
  pin.children[0].src = `${obj.author.avatar}`
    pin.style.left = `${obj.location.x + templatePin.style.width / 2}px`
    pin.style.top = `${obj.location.y - templatePin.style.height}px`;
    pin.children[0].alt= `${obj.offer.title}`

    return pin
}

const createPopupElem = function(elem){
  const fragment = document.createDocumentFragment();
  fragment.appendChild(elem)
  map.children[1].appendChild(fragment)
}

const getFeature = (arr, domEl) => {
  for(let i = 0 ;i < FEATURES.length; i++) {
   domEl.querySelector(`.popup__feature--${FEATURES[i]}`).classList.add('hidden');

  }
  for(let i = 0 ; i < 6; i++) {
   if (arr[i] == FEATURES[0] || arr[i] == FEATURES[1] || arr[i] == FEATURES[2] || arr[i] == FEATURES[3] || arr[i] == FEATURES[4] || arr[i] == FEATURES[5] ){
      domEl.querySelector(`.popup__feature--${arr[i]}`).classList.remove('hidden')
    }
  }

}

const getPhotos = (arr, domEl) => {
  console.log(arr)
   if (arr.length == 0){
    domEl.children[0].classList.add('hidden')
    domEl.innerText = 'Фото отсутствуют'
  } else {
      domEl.children[0].src = arr[0]
    for(let i = 1; i < arr.length; i++) {
      let newEl = domEl.children[0].cloneNode('True')
      newEl.src = arr[i]
      domEl.appendChild(newEl)
    }
  }
}

const generatePopup = (obj) => {
  const popup = templatePopup.cloneNode(true);

  popup.querySelector('.popup__title').innerText = `${obj.offer.title}`;
  popup.querySelector('.popup__text--address').innerText = `${obj.offer.address}`;
  popup.querySelector('.popup__text--price').innerText = `${obj.offer.price}₽/ночь`;
  popup.querySelector('.popup__type').innerText = `${obj.offer.type}`;
  popup.querySelector('.popup__text--capacity').innerText = `${obj.offer.rooms} комнаты для ${obj.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').innerText = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`;
  getFeature(obj.offer.features, popup.querySelector('.popup__features'))
  popup.querySelector('.popup__description').textContent = `${obj.offer.description}`
  getPhotos(obj.offer.photos, popup.querySelector('.popup__photos'))
  popup.querySelector('.popup__avatar').src = obj.author.avatar
  // console.log(popup)
  return popup
}

const getPinsForMap = function(array){
  const fragment = document.createDocumentFragment();
  for(let i = 0; i < array.length; i++){
    fragment.appendChild(createPinElement(array[i]));

  }
  mapPins.appendChild(fragment)

}

const arrPinsMap = generateAds(8)
getPinsForMap(arrPinsMap)
createPopupElem(generatePopup(arrPinsMap[5]))


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


