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
  console.log(elem)
map.children[1].appendChild(fragment)
}

const getFeature = (arr, domEl) => {
  // domEl.querySelector('.popup__feature--wifi').classList.add('hidden')
  // domEl.querySelector('.popup__feature--dishwasher').classList.add('hidden')
  // domEl.querySelector('.popup__feature--parking').classList.add('hidden')
  // domEl.querySelector('.popup__feature--washer').classList.add('hidden')
  // domEl.querySelector('.popup__feature--elevator').classList.add('hidden')
  // domEl.querySelector('.popup__feature--conditioner').classList.add('hidden')

  // for(let i = 0;i < arr.length; i++){
  //   if (arr[i] == "wifi"){

  //     domEl.querySelector('.popup__feature--wifi').classList.remove('hidden')
  //     console.log(arr)
  //   } else if (arr[i] == "dishwasher"){
  //     domEl.querySelector('.popup__feature--dishwasher').classList.remove('hidden')

  //   } else if (arr[i] == "parking"){
  //     domEl.querySelector('.popup__feature--parking').classList.remove('hidden')

  //   } else if (arr[i] == "washer"){
  //     domEl.querySelector('.popup__feature--washer').classList.remove('hidden')

  //   } else if (arr[i] == "elevator"){
  //     domEl.querySelector('.popup__feature--elevator').classList.remove('hidden')

  //   } else if (arr[i] == "conditioner"){
  //     domEl.querySelector('.popup__feature--conditioner').classList.remove('hidden')

  //   }
  // }
  // console.log(`.popup__feature--${FEATURES[1]}`, 9999999)

  for(let i = 0 ; i < FEATURES; i++) {
    console.log(`.popup__feature--${FEATURES[i]}`, 9999999)
   domEl.querySelector(`.popup__feature--${FEATURES[i]}`).classList.add('hidden')
   if (arr[i] == FEATURES[0] || arr[i] == FEATURES[1] || arr[i] == FEATURES[2] || arr[i] == FEATURES[3] || arr[i] == FEATURES[4] || arr[i] == FEATURES[5]){
    console.log(`.popup__feature--${arr[i]}`, 888888888);
      domEl.querySelector(`.popup__feature--${arr[i]}`).classList.remove('hidden')
      console.log(arr)
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
  // popup.querySelector('.popup__features').innerText = `${obj.offer.features}`;
  getFeature(obj.offer.features, popup.querySelector('.popup__features'))
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
// console.log(arrPinsMap);
getPinsForMap(arrPinsMap)
createPopupElem(generatePopup(arrPinsMap[0]))


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


