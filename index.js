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

// function writeCards(guestName, event) {
//   let newArray = [];
//   for (let i = 0; i < guestName.length; i++) {
//     let greeting = `Thank you, ${guestName[i]}, for the wonderful ${event} gift!`;

//     newArray.push(greeting);
//   }
//   return newArray;
// }
// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

// function countDown(int) {
//   let i = 10;
//   while (i >= 0) {
//     console.log(i);
//     i--;
//   }
//   return int;
// }
// countDown();

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);

function writeCards(name, eventName) {
  let cardsArray = [];
  for (let i = 0; i < name.length; i++) {
    let newArray = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
    cardsArray.push(newArray);
  }
  return cardsArray;
}

writeCards();

function countDown(int) {
  let n = int;
  while (n >= 0) {
    console.log(n--);
  }
}
countDown(5);
