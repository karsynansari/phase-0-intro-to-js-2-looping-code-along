// function writeCards(names, events) {
//   let newArr = [];
//   for (let i = 0; i < names.length; i++) {
//     let message = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
//     newArr.push(message);
//   }
//   return newArr;
// }
// function countDown(int) {
//   let i = 10;
//   while (i >= 0) {
//     console.log(i);
//     i--;
//   }
//   return int;
// }

function writeCards(guestName, event) {
  let newArray = [];
  for (let i = 0; i < guestName.length; i++) {
    let greeting = `Thank you, ${guestName[i]}, for the wonderful ${event} gift!`;

    newArray.push(greeting);
  }
  return newArray;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(int) {
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return int;
}
countDown();
