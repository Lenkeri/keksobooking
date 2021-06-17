const form = document.querySelector('.ad-form');
const addrInput = form.querySelector('#address');
const pinMap = document.querySelector('.map__pin--main')
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

