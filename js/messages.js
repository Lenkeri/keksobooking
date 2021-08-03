
const errorList = document.querySelector('.error-list')
const errorText = errorList.querySelector('.content-err');
const success = document.getElementById('success');
const error = document.getElementById('error')
const main = document.querySelector('main');
const errorElem = document.querySelector('.error');
const successElem = document.querySelector('.success')


export const showError_getData = function (error) {
  errorList.classList.remove('visually-hidden')
  errorText.textContent = ` Произошла ошибка! ${error}`;
}

export const messageSuccess = () => {
  getTmpledElem(success, main)
}
export const messageError = () => {
  getTmpledElem(error, main)
  document.addEventListener('click', function () {
    errorElem.parentNode.removeChild(errorElem)
  })

}

const getTmpledElem = (temp, container) => {
  const newElem = temp.content.cloneNode(true)
  container.appendChild(newElem)

}


