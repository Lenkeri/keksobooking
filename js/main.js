import {random_integer} from './util.js'



let objTemplateMok = {
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

const FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]

// {
//   "author": {
//       "avatar": строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
//   },
//   "offer": {
//       "title": строка, заголовок предложения
//       "address": строка, адрес предложения. Для простоты пусть пока представляет собой запись вида "{{location.x}}, {{location.y}}", например, "600, 350"
//       "price": число, стоимость
//       "type": строка с одним из четырёх фиксированных значений: palace, flat, house или bungalow
//       "rooms": число, количество комнат
//       "guests": число, количество гостей, которое можно разместить
//       "checkin": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
//       "checkout": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
//       "features": массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
//       "description": строка с описанием,
//       "photos": массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
//   },
//   "location": {
//       "x": случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
//       "y": случайное число, координата y метки на карте от 130 до 630.
//   }
// }
// const getArrAd = function(){
//   console.log('jngjfgg');

//   }
let arrAd = [];
console.log(getArrAd());

let author = objTemplateMok.author;
let offer = objTemplateMok.offer;
let lacation = objTemplateMok.location;


function getArrAd(template, num) {
  console.log(template);

  for (let i = 0; i < num; i++){
    console.log(template);

    author.avatar = `img/avatars/user0${i}.png`
    offer.title = TITLES[i];
    // offer.address(`${Window.x} ${Window.y}`)
     if (i === 2 || i === 3){
       offer.type = 'palace'
     } else if(i === 0 || i === 1){
      offer.type = 'flat'

     } else if (i === 4 || i === 5){
       offer.type = 'house'
     } else {
       offer.type = 'bungalow'
     }
    arrAd.push(template)
  }

}
  getArrAd(objTemplateMok, 8)
  console.log(arrAd)
