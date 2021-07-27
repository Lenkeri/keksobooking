export const getData = function(onSuccess, onError){
  const promise = fetch('htps://21.javascript.pages.academy/keksobooking/data');
  promise
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(`${res.status} — ${res.statusText}`)
    }
  })
  .then((body) => {
    onSuccess(body);
  })
  .catch(onError)
}
