
const errorList = document.querySelector('.error-list')
const errorText = errorList.querySelector('.content-err');


export const showError_getData = function (error) {
  errorList.classList.remove('visually-hidden')
  errorText.textContent = ` Произошла ошибка! ${error}`;
}
