function writeCards(names, events) {
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
    newArr.push(message);
  }
  return newArr;
}
function countDown(int) {
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return int;
}
