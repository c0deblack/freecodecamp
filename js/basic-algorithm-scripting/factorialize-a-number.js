  /*
  function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}
*/
  /*
  function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

*/
  /* function factorialize(num, factorial = 1) {
  if (num == 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}
*/
  /*function factorialize(num, factorial = 1) {
  return num < 0 ? 1 : (
    new Array(num)
      .fill(undefined)
      .reduce((product, val, index) => product * (index + 1), 1)
  );
}
 */
 function factorialize(num) {
  
  log("num is " + num);
  if (num === 0) {
    return 1;
  } else {
    log("start recursion");
    let factorial = factorialize(num - 1);

    log("closed recursion");
    log("moving on to the algorithm");
    log("factorial so far is ... " + factorial);

    return num * factorial;
  }
}

const log = output => console.log(output);

console.log(factorialize(5));
