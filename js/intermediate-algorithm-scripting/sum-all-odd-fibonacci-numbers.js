/*
function sumFibs(num) {
  if (num <= 0) return 0;

  const arrFib = [1, 1];
  let nextFib = 0;

  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}
*/

/*
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}
*/

function sumFibs(num) {
  let fibSeq = [1, 1];
  let i = 1;
  let fibNum = 0;

  //generate the Fibonacci sequence

  while (fibNum <= num) {
    fibNum = fibSeq[i - 1] + fibSeq[i];

    if (fibNum <= num) fibSeq.push(fibNum);

    i++;
  }

  //filter out all odd values
  //and sum them all together
  return fibSeq.filter((x) => x % 2 != 0).reduce((x, y) => x + y);
}

console.log(sumFibs(4));
console.log(sumFibs(80));
console.log(sumFibs(75025));
