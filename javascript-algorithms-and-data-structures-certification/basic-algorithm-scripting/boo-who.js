function booWho(bool) {
  console.log(typeof true);

  return typeof bool == 'boolean' ? true : false;
}

console.log(booWho(0));