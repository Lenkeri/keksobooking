import {random_integer, getRandomItem, getArrRandomLength} from './util.js'

const TITLES = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде',
];

function generateAd (){
  return  {
    "author": {
        "avatar": '',
    },
    "offer": {
        "title": '',
        "address": '',
        "price": '',
        "type": '',
        "rooms": '',
        "guests":'',
        "checkin": '',
        "checkout":'',
        "features":'',
        "description": '',
        "photos": ''
    },
    "location": {
        "x": '',
        "y": ''
    }
  }
}

const FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
const CHECKIN = ['12:00', '13:00', '14:00']
const mapOverlay = document.querySelector('.map__overlay');
const map = document.querySelector('.map')
map.classList.remove('map--faded')
const templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
const createPinElement = function(obj){
  const pin = templatePin.cloneNode(true);
  pin.children[0].src = `${obj.author.avatar}`
    pin.style.left = `${obj.location.x + templatePin.style.width / 2}px`
    pin.style.top = `${obj.location.y - templatePin.style.height}px`;
    pin.children[0].alt= `${obj.offer.title}`

mapPins.appendChild(pin)

}

 function getNewPin(){
 return document.querySelector('#pin').content.querySelector('.map__pin');
}
const mapPins = document.querySelector('.map__pins')

const PHOTOS = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]

let arrAd = [];

function getArrAd(num) {
  for (let i = 0; i < num; i++){

    let template = generateAd()

    let author = template.author;
    let offer = template.offer;
    let location = template.location;
    author.avatar = `img/avatars/user0${i + 1}.png`;

    offer.title = TITLES[i];
    offer.address = `${location.x} ${location.y}`
    offer.price = random_integer(2000, 50000)
     if (i === 2 || i === 3){
       offer.type = 'palace'
     } else if(i === 0 || i === 1){
      offer.type = 'flat'

     } else if (i === 4 || i === 5){
       offer.type = 'house'
  } else {
       offer.type = 'bungalow'
     }
    offer.rooms = random_integer(1, 10);
    offer.guests = offer.rooms;
    offer.checkin = getRandomItem(CHECKIN);
    offer.checkout = offer.checkin;
    offer.features = getArrRandomLength(FEATURES);
    offer.description = TITLES[i];
    offer.photos = getArrRandomLength(PHOTOS);
    location.x = random_integer(1, mapOverlay.clientWidth)
    location.y = random_integer(130, 630);
    arrAd.push(template)
    createPinElement(template);


  }
}
  getArrAd(8)
  // console.log(arrAd)

