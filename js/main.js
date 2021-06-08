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
const mapPins = document.querySelector('.map__pins')

const getPinsForMap = function(num){
  const arr = generateAds(num)
  for(let i = 0; i < num;i ++){
  mapPins.appendChild(createPinElement(arr[i]))

  }
}

getPinsForMap(8)


