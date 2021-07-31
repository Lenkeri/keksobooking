export const getData = function(onSuccess, onError){
  const promise = fetch('https://21.javascript.pages.academy/keksobooking/data');
  promise
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(`${res.status} — ${res.statusText}`)
    }
  })
  .then(onSuccess)
  .catch(onError)
}


export const loadData = function(data, onSuccess, onError){
  fetch('https://21.javascript.pages.academy/keksobooking.', {
   method: 'POST',
   body: data,
  }).then(onSuccess).catch(onError)


 }

