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
const PHOTOS = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
]
export const FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
const CHECKIN = ['12:00', '13:00', '14:00']
const TYPE_OFFER = ['palace', 'flat', 'house', 'bungalow']

function generateAd(i) {
  const x = random_integer(1, 1200);
  const y = random_integer(130, 630)
  return  {
    author: {
      avatar: `img/avatars/user0${i + 1}.png`,
    },
    offer: {
      title: TITLES[i],
      address: `${x} ${y}`,
      price: random_integer(2000, 50000),
      type: getRandomItem(TYPE_OFFER),
      rooms: random_integer(1, 10),
      guests:  random_integer(1, 10),
      checkin: getRandomItem(CHECKIN),
      checkout: getRandomItem(CHECKIN),
      features: getArrRandomLength(FEATURES),
      description: TITLES[i],
      photos: getArrRandomLength(PHOTOS)
    },
    location: {
      x,
      y
    }
  }
}

export const generateAds = (num) => {
  const arr = [];
  for(let i = 0; i < num; i += 1) {
    arr.push(generateAd(i));
  }
  return arr;
}
