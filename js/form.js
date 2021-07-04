const form = document.querySelector('.ad-form');
const addrInput = form.querySelector('#address');
const pinMap = document.querySelector('.map__pin--main');
const numberRoom = form.querySelector('.room-number');
const formRoom = form.querySelector('#room_number');
const homeType = form.querySelector('#type');
const priceType = form.querySelector('#price');
const guest = form.querySelector('#capacity');

export function getDisableForm () {
  const arr = form.querySelectorAll('fieldset')
  form.classList.add('ad-form--disabled')
  for(let i = 0; i < arr.length; i++){
    arr[i].setAttribute('disabled', 'disabled')
  }
}

export const getUndisableForm = function () {
  const arr = form.querySelectorAll('fieldset')
  form.classList.remove('ad-form--disabled')
  for(let i = 0; i < arr.length; i++){
    arr[i].removeAttribute('disabled')
  }

  let coordinatePin = pinMap.getBoundingClientRect()
  let pinX = coordinatePin.x + pinMap.style.width / 2;
  let pinY = coordinatePin.bottom;
  addrInput.value = Math.ceil(pinX) + ' ' + Math.ceil(pinY);

}

formRoom.addEventListener('input', function () {
  checkRoomCapacity()
})
guest.addEventListener('input', function () {
  checkGuestCapacity()
})
homeType.addEventListener('input', function () {
  checkPriceCapacity()
})
priceType.addEventListener('input',function () {
  checkPriceCapacity()
} )

const roomCapacity = {
  "1": [1],
  "2": [1,2],
  "3": [1,2,3],
  "100": [0]
}

const guestCapacity = {
  '1':[1, 2, 3],
  '2':[2, 3],
  '3':[3],
  '0':[100]

}

const priceCapacity = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000
}

const checkRoomCapacity = function () {
  const guestOptions = roomCapacity[formRoom.value];
  if (guestOptions.includes(Number(guest.value))) {
    formRoom.setCustomValidity('')

  } else {
    formRoom.setCustomValidity("fail")
    formRoom.reportValidity();
  }
}

const checkGuestCapacity = () => {
const roomOptions = guestCapacity[guest.value];
if (roomOptions.includes(Number(formRoom.value))) {
  guest.setCustomValidity('')
} else {
  guest.setCustomValidity("fail")
  guest.reportValidity()
}
}

const checkPriceCapacity = () => {
  const priceOptions = priceCapacity[homeType.value]
  priceType.min = priceOptions;
  console.log(1);
  if (priceOptions <  priceType.value) {
    priceType.setCustomValidity('')
  } else {
    priceType.setCustomValidity('fail')
    priceType.reportValidity();
  }
}



