import {generateAds} from './data.js'

const map = document.querySelector('.map')
map.classList.remove('map--faded')

const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
const createPinElement = function(obj){
  const pin = templatePin.cloneNode(true);
  pin.children[0].src = `${obj.author.avatar}`
    pin.style.left = `${obj.location.x + templatePin.style.width / 2}px`
    pin.style.top = `${obj.location.y - templatePin.style.height}px`;
    pin.children[0].alt= `${obj.offer.title}`

    return pin
}
const mapPins = map.querySelector('.map__pins')



const getPinsForMap = function(array){
  const fragment = document.createDocumentFragment();
  for(let i = 0; i < array.length; i++){
    fragment.appendChild(createPinElement(array[i]))


  }
  mapPins.appendChild(fragment)
}

const arrPinsMap = generateAds(8)
getPinsForMap(arrPinsMap)


