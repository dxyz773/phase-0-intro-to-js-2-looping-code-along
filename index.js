function writeCards(name, event) {
  let card = [];
  for (let i = 0; i < name.length; i++) {
    card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return card;
}

function countDown(integer) {
  while (integer >= 0) {
    console.log(integer);
    integer--;
  }
}

countDown(10);
