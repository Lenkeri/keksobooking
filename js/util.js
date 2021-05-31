export function random_integer(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export const getRandomItem = function(arr) {
  const randomIndex = random_integer(1, arr.length - 1);
  return arr[randomIndex];
}

export const getArrRandomLength = function(arr){
let newArr = []
for (let i = 0; i < arr.length ; i++){
  let num = random_integer(0, 1)
  if(num == true){
    newArr.push(arr[i])
  }
}
return newArr
}
