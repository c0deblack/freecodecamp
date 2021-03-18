/*
const squareList = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};
*/

/*
const squareList = (arr) => {

  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));

};

*/

const squareList = arr => {

  return arr.reduce((retArr, realNum) => {
    //console.log(realNum);
    //console.log(realNum > 0);
    //console.log(realNum % 1 == 0);
    if ((realNum > 0) && (realNum % 1 == 0)) {
      retArr.push(realNum * realNum);
      //console.log(realNum*realNum);
    }
    return retArr; 
  }, []);

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);