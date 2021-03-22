/*
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}
*/

/*
function checkCashRegister(price, cash, cid) {
  //declare and initialize variables
  var change = Math.round((cash - price) * 100);
  var value = 0;
  var changeRecord = [];
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  //convert all floats to integers due to floating point number issue
  cid.forEach(el => el[1] = Math.round(el[1] * 100));
  //helper function to check if sufficient cash for change is in the drawer
  function enoughFund(cid) {
    var sum = cid.filter((el, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }

  //Actual program/control flow starts here
  if (enoughFund(cid) < change)
    return "Insufficient Funds";
  else if (enoughFund(cid) === change)
    return "Closed";
  else {
    for (var i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i]) {
        //update everything as long as condition is true
        change -= currency[i];
        cid[i][1] -= currency[i];
        //value keeps track of the amount of each currency unit as change
        value += currency[i];
      }
      if (value)
        changeRecord.push([cid[i][0], value]);
    }
  }
  //divide each array by 100 to display a proper money format
  changeRecord.forEach(el => el[1] = (el[1] / 100));
  return changeRecord;
}
*/

function checkCashRegister(price, cash, cid) {
  const CASH_MAP = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.10,
    QUARTER: 0.25,
    ONE: 1.00,
    FIVE: 5.00,
    TEN: 10.00,
    TWENTY: 20.00,
    'ONE HUNDRED': 100.00,
  };

    const REGISTER = cid.sort((a, b) => {

      return CASH_MAP[b[0]] - CASH_MAP[a[0]];

    }).reduce((ret, denom) => {
      ret.push ({
        NAME: denom[0],
        POOL: denom[1],
        VAL: CASH_MAP[denom[0]],
        QUANTITY: Math.round(denom[1] / CASH_MAP[denom[0]]),
      })
      return ret;
    }, [])

  let changeDue = cash - price;
  console.log(changeDue);

  let changeObj = {};

  //return REGISTER;
  for (let i = 0; i < REGISTER.length; i++) {

    //console.log(REGISTER[i]);

    while ((REGISTER[i].QUANTITY > 0) & (REGISTER[i].VAL <= changeDue)) {
      //console.log(true);
      //console.log(changeDue);
      //console.log(`QUAN IS: ${REGISTER[i].QUANTITY}   VAL IS: ${REGISTER[i].VAL}`)

      
      REGISTER[i].QUANTITY = REGISTER[i].QUANTITY - 1;
      REGISTER[i].POOL = REGISTER[i].QUANTITY * REGISTER[i].VAL;

      changeDue = (changeDue - REGISTER[i].VAL).toFixed(2);

      changeObj[REGISTER[i].NAME] = isNaN(changeObj[REGISTER[i].NAME]) 
        ? 1 
        : changeObj[REGISTER[i].NAME] + 1;

      //console.log(changeObj);

    }
  }


/*
To iterate over the array returned by Object.entries(), you can either use the for...of loop or the forEach() method as shown below:

// `for...of` loop
for (const [key, value] of Object.entries(animals)) {
    console.log(`${key}: ${value}`);
}

// `forEach()` method
Object.entries(animals).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
});
*/

/*
// `for...in` method
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key}: ${user[key]}`);
    }
}
*/

  console.log(changeObj);

  let changeArr = [];

  for (let currencyName in changeObj) {
    /*
    console.log(
      currencyName,
      changeObj[currencyName],
      changeObj[currencyName] * CASH_MAP[currencyName]
    );
    */

    changeArr.push(
      [
        currencyName,
        changeObj[currencyName] * CASH_MAP[currencyName]
      ]
    );
  }

  console.log(changeArr);

  let returnStatus = '';
  let returnObject = {};

  let changeLeft = ((register = REGISTER) => {
    let zeroedOut = 0;
    for (let i = 0; i < register.length; i++) {
      if (register[i].POOL == 0) {
        zeroedOut += 1
      }
    }

    if (zeroedOut == REGISTER.length) {
      return false;
    } else {
      return true;
    }
  })()

  console.log(`Change Left: ${changeLeft}`);
  console.log(`Change Due: ${changeDue}`)
  if (changeDue > 0) {

    returnStatus = 'INSUFFICIENT_FUNDS';

    returnObject['status'] = returnStatus;
    returnObject['change'] = [];

  } else if (changeDue == 0){

    console.log(`CONDITION: PASS: changeDue = 0`)
    if (changeLeft === false) {

      returnStatus = 'CLOSED';

      returnObject['status'] = returnStatus;
      returnObject['change'] = REGISTER.reverse().reduce((ret, val) => {

        let change = changeObj[val.NAME];

        if (isNaN(change)) {
          ret.push([val.NAME, 0]);
        } else {
          ret.push([val.NAME, change * CASH_MAP[val.NAME]]);
        }
        
        return ret;
    }, []);

    } else if (changeLeft === true) {

      returnStatus = 'OPEN'

      returnObject['status'] = returnStatus;
      returnObject['change'] = changeArr;
    }

  }
  console.log(returnObject);
  return returnObject;
}

console.log(checkCashRegister(19.5, 20, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]));

console.log(checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]))

console.log(checkCashRegister(3.26, 100, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]));

console.log(checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]));