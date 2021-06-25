const form = document.querySelector('.ad-form');
const addrInput = form.querySelector('#address');
const pinMap = document.querySelector('.map__pin--main');
const numberRoom = form.querySelector('.room-number');
const formRoom = form.querySelector('#room_number');
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
  // addrInput.value = pinMap.pageX;
  let coordinatePin = pinMap.getBoundingClientRect()
  let pinX = coordinatePin.x + pinMap.style.width / 2;
  let pinY = coordinatePin.bottom;
  // Math.ceil
  console.log(pinX, pinY);
  addrInput.value = Math.ceil(pinX) + ' ' + Math.ceil(pinY);


}
const guest = form.querySelector('#capacity');

formRoom.addEventListener('input', function () {
  checkRoomCapacity()

})
guest.addEventListener('input', function () {
  checkGuestCapacity()
})

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

